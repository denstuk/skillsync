import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoaderOverlay from "../components/Loader";
import { QuizData, Question, AnswerResponse } from "../types";
import FeedbackOverlay from "../components/Feedback.tsx";
import { QuizSessionContext } from "../context/QuizSessionContext.tsx";
import CodingQuestion from "../components/CodingQuestion.tsx";
import QuizQuestion from "../components/QuizQuestion.tsx";

interface QuizPageProps {
  quizData: QuizData | null;
  endQuiz: (result: AnswerResponse) => void;
}

const QuizPage: React.FC<QuizPageProps> = ({ quizData, endQuiz }) => {
  const [question, setQuestion] = useState<Question | null>(null);
  const session = useContext(QuizSessionContext);
  const [loading, setLoading] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestion = async () => {
      setLoading(true);
      const response = await session.session?.getQuestion();
      setQuestion(response || null);
      setLoading(false);
    };

    if (quizData) {
      fetchQuestion();
    } else {
      navigate("/");
    }
  }, [quizData, navigate, session.session]);

  const handleAnswer = async (answer: string) => {
    if (!session.session) return;

    setLoading(true);
    const response = await session.session.submitAnswer(answer);
    setFeedback(response.previous_answer_feedback);
    setIsCorrect(response.previous_answer_correct);
    setLoading(false);
    setShowFeedback(true);
    setTimeout(() => {
      if (
        response.question_number &&
        response.question_number <= quizData!.numQuestions
      ) {
        setQuestion({
          question: response.question!,
          options: response.options,
          question_number: response.question_number,
          question_type: response.question_type,
        });
        setShowFeedback(false);
      } else {
        endQuiz(response);
        navigate("/results");
      }
    }, 3000);
  };
  console.log(question);
  if (!question) return <LoaderOverlay />;

  return (
    <div className="quiz-page">
      {question.question_type === "coding" ? (
        <CodingQuestion question={question} onAnswer={handleAnswer} />
      ) : (
        <QuizQuestion question={question} onAnswer={handleAnswer} />
      )}
      {showFeedback && (
        <FeedbackOverlay feedback={feedback} correct={isCorrect} />
      )}
      {loading && <LoaderOverlay />}
    </div>
  );
};

export default QuizPage;

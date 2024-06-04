import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoaderOverlay from "../components/Loader";
import { QuizData, Question, AnswerResponse } from "../types";
import { QuizSessionContext } from "../context/QuizSessionContext.tsx";
import CodingQuestion from "../components/CodingQuestion.tsx";
import QuizQuestion from "../components/QuizQuestion.tsx";
import Layout from "../components/Layout.tsx";

interface QuizPageProps {
  quizData: QuizData | null;
  endQuiz: (result: AnswerResponse) => void;
}

const QuizPage: React.FC<QuizPageProps> = ({ quizData, endQuiz }) => {
  const [question, setQuestion] = useState<Question | null>(null);
  const session = useContext(QuizSessionContext);
  const [loading, setLoading] = useState(true);

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
    setLoading(false);

    if (
      response.question_number &&
      session?.session?.maxQuestions &&
      response.question_number < session?.session?.maxQuestions
    ) {
      setQuestion({
        question: response.question!,
        options: response.options,
        question_number: response.question_number,
        question_type: response.question_type,
      });
    } else {
      endQuiz(response);
      navigate("/results");
    }
  };

  if (!question) return <LoaderOverlay />;

  return (
    <Layout>
      {question.question_type === "coding" ? (
        <CodingQuestion question={question} onAnswer={handleAnswer} />
      ) : (
        <QuizQuestion question={question} onAnswer={handleAnswer} />
      )}
      {loading && <LoaderOverlay />}
    </Layout>
  );
};

export default QuizPage;

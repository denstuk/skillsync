import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Question from '../components/Question';
import LoaderOverlay from '../components/Loader';
import {getQuestion, submitAnswer} from '../api';
import {QuizData, Question as QuestionType, AnswerResponse} from '../types';
import FeedbackOverlay from "../components/Feedback.tsx";

interface QuizPageProps {
  quizData: QuizData | null;
  endQuiz: (result: AnswerResponse) => void;
}

const QuizPage: React.FC<QuizPageProps> = ({quizData, endQuiz}) => {
  const [question, setQuestion] = useState<QuestionType | null>(null);
  const [loading, setLoading] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestion = async (questionNumber: number) => {
      setLoading(true);
      const response = await getQuestion(quizData!.topic, questionNumber, quizData!.numQuestions);
      setQuestion(response);
      setLoading(false);
    };

    if (quizData) {
      fetchQuestion(1);
    } else {
      navigate('/');
    }
  }, [quizData, navigate]);

  const handleAnswer = async (answer: string) => {
    setLoading(true);
    const response = await submitAnswer(question!.question_number, answer, quizData!.topic);
    setFeedback(response.previous_answer_feedback);
    setIsCorrect(response.previous_answer_correct);
    setLoading(false);
    setShowFeedback(true);
    setTimeout(() => {
      if (response.question_number && response.question_number <= quizData!.numQuestions) {
        setQuestion({
          question: response.question!,
          options: response.options,
          question_number: response.question_number,
        });
        setShowFeedback(false);
      } else {
        endQuiz(response);
        navigate('/results');
      }
    }, 3000);
  };

  if (!question) return <LoaderOverlay/>

  return (
    <div className="quiz-page">
      <Question question={question} onAnswer={handleAnswer}/>
      {showFeedback && <FeedbackOverlay feedback={feedback} correct={isCorrect}/>}
      {loading && <LoaderOverlay/>}
    </div>
  )
}

export default QuizPage;

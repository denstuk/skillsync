import {
  FC,
  createContext,
  PropsWithChildren,
  useState,
  useContext,
  useEffect,
} from "react";

import { TaskAnswer } from "../api/types";
import { TasksContext } from "./TasksContext";
import { submitQuiz } from "../api/api";
import { useNavigate } from "react-router-dom";
import { QuizResult } from "../types";

export const QuestionAndAnswersContext = createContext<{
  currentIndex: number;
  answers: TaskAnswer[] | null;
  answer: (userAnswer: TaskAnswer) => Promise<void>;
  results: QuizResult | null;
  loadingResults: boolean;
}>({
  currentIndex: 0,
  answers: null,
  answer: async () => {},
  results: null,
  loadingResults: false,
});

export const QuestionAndAnswersProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { tasks } = useContext(TasksContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<TaskAnswer[]>([]);
  const [results, setResults] = useState<QuizResult | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const answer = async (userAnswer: TaskAnswer) => {
    if (tasks && answers && answers.length < tasks.length) {
      setAnswers((prev) => {
        const newOne = [...prev];
        newOne[currentIndex] = userAnswer;
        return newOne;
      });
      setCurrentIndex((prev) => ++prev);
    }
  };

  useEffect(() => {
    if (answers.length === tasks?.length) {
      setLoading(true);
      submitQuiz({ tasks: tasks!, answers }).then((res) => {
        setResults(res);
        setLoading(false);
        navigate("/results", { state: res });
      });
    }
  }, [answers, navigate, tasks]);

  return (
    <QuestionAndAnswersContext.Provider
      value={{
        currentIndex,
        answers,
        answer,
        results,
        loadingResults: loading,
      }}
    >
      {children}
    </QuestionAndAnswersContext.Provider>
  );
};

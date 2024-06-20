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
import { ISubmitQuizParams, submitQuiz } from "../api/api";
import { useNavigate } from "react-router-dom";
import { MOCK_FINISHED_QUIZ } from "../api/mocks";

const MOCK_FLAG = import.meta.env.VITE_IS_MOCKED;

export const QuestionAndAnswersContext = createContext<{
  currentIndex: number;
  answers: string[] | null;
  answer: (userAnswer: TaskAnswer) => Promise<void>;
  loadingResults: boolean;
}>({
  currentIndex: 0,
  answers: null,
  answer: async () => {},
  loadingResults: false,
});

export const QuestionAndAnswersProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { tasks } = useContext(TasksContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const answer = async (userAnswer: TaskAnswer) => {
    if (tasks && answers && answers.length < tasks.length) {
      setAnswers((prev) => {
        const newOne = [...prev];
        newOne[currentIndex] = Array.isArray(userAnswer.answer)
          ? userAnswer.answer.join()
          : userAnswer.answer;
        return newOne;
      });
      setCurrentIndex((prev) => ++prev);
    }
  };

  useEffect(() => {
    if (answers.length === tasks?.length) {
      setLoading(true);
      submitQuiz({ tasks: tasks!, answers }).then((res) => {
        setLoading(false);
        navigate("/results", { state: res });
      });
    }
  }, [answers, navigate, tasks]);

  useEffect(() => {
    if (MOCK_FLAG) {
      setLoading(true);
      submitQuiz(MOCK_FINISHED_QUIZ as ISubmitQuizParams).then((res) => {
        setLoading(false);
        navigate("/results", { state: res });
      });
    }
  }, [navigate]);

  return (
    <QuestionAndAnswersContext.Provider
      value={{
        currentIndex,
        answers,
        answer,

        loadingResults: loading,
      }}
    >
      {children}
    </QuestionAndAnswersContext.Provider>
  );
};

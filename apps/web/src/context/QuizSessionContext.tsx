import {
  FC,
  createContext,
  useEffect,
  useState,
  PropsWithChildren,
} from "react";
import { QuizData } from "../types";
import { QuizSession } from "../api";

export const QuizSessionContext = createContext<{
  session: QuizSession | null;
}>({ session: null });

export const QuizSessionProvider: FC<
  { quizData: QuizData | null } & PropsWithChildren
> = ({ quizData, children }) => {
  const [session, setSession] = useState<QuizSession | null>(null);

  useEffect(() => {
    if (quizData) {
      const newSessionInstance = new QuizSession(
        quizData?.questionType,
        quizData?.topic,
        quizData?.numQuestions,
        quizData?.subtopics
      );

      setSession(newSessionInstance);
    }

    return () => {
      setSession(null);
    };
  }, [quizData]);

  return (
    <QuizSessionContext.Provider value={{ session }}>
      {children}
    </QuizSessionContext.Provider>
  );
};

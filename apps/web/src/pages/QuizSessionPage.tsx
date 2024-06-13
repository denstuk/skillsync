import { FC } from "react";
import { SkillAndLevelProvider } from "../context/SkillAndLevelContext";
import { TasksProvider } from "../context/TasksContext";
import { QuestionAndAnswersProvider } from "../context/QuestionAndAnswerContext";
import { QuizDemoPage } from "./Experimental/QuizDemoPage";

export const QuizSessionPage: FC = () => {
  return (
    <SkillAndLevelProvider>
      <TasksProvider>
        <QuestionAndAnswersProvider>
          <QuizDemoPage />
        </QuestionAndAnswersProvider>
      </TasksProvider>
    </SkillAndLevelProvider>
  );
};

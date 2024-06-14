import { FC } from "react";
import { QuestionAndAnswersProvider } from "../../context/QuestionAndAnswerContext";
import { SkillAndLevelProvider } from "../../context/SkillAndLevelContext";
import { TasksProvider } from "../../context/TasksContext";
import { QuizDemoPage } from "./QuizDemoPage";

export const QuizPage: FC = () => {
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

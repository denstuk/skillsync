import { Flex, Heading, Text } from "@radix-ui/themes";
import { FC, useCallback, useContext } from "react";
import {
  IMultipleChoiceTask,
  ISingleChoiceTask,
  TaskType,
} from "../../api/types";
import { QuizLoaderOverlay } from "../../components/QuizLoaderOverlay/QuizLoaderOverlay";
import { QuestionAndAnswersContext } from "../../context/QuestionAndAnswerContext";
import { SkillAndLevelContext } from "../../context/SkillAndLevelContext";
import { TasksContext } from "../../context/TasksContext";
import { CodeTaskView } from "./QuizTaskView/CodeTaskView";
import { FreeTextTaskView } from "./QuizTaskView/FreeTextTaskView";
import { MultipleChoiceTaskView } from "./QuizTaskView/MultipleChoiceTaskView";
import { PlaceHolderTaskView } from "./QuizTaskView/PlaceHolderTaskView";
import { SingleChoiceTaskView } from "./QuizTaskView/SingleChoiceTaskView";

export const QuizDemoPage: FC = (): React.ReactNode => {
  const { tasks, tasksLoading: loading } = useContext(TasksContext);
  const { skill, level } = useContext(SkillAndLevelContext);
  const { currentIndex, answer, loadingResults } = useContext(
    QuestionAndAnswersContext
  );

  const currentTask = tasks?.[currentIndex];

  const onSkipAnswer = useCallback(() => {
    answer({ answer: "I don't know" });
  }, [answer]);

  if (!tasks?.length || loading || loadingResults) {
    return (
      <QuizLoaderOverlay
        loading={!tasks?.length || loading || loadingResults}
      />
    );
  }

  if (!currentTask) {
    return (
      <Text color="red" size="9">
        {"Something went wrong :("}
      </Text>
    );
  }

  return (
    <Flex direction="column" px="9" width="100%">
      <QuizLoaderOverlay loading={loading} />

      <Flex direction="row" align="center" gap="5" mt="9">
        <Heading size="8">SkillSync</Heading>
        <Heading size="6">|</Heading>
        <Heading size="6">
          {level}{" "}
          <Text color="green" mr="1">
            {skill}
          </Text>
        </Heading>
      </Flex>

      <Flex direction="column" gap="5" mt="5" mb="9">
        <Text size="6">
          <Text color="green" mr="1">
            #{currentIndex + 1}
          </Text>{" "}
          {currentTask?.question}
        </Text>
      </Flex>

      <div className="w-full">
        {currentTask.type === TaskType.SingleChoice ? (
          <SingleChoiceTaskView
            options={(currentTask as ISingleChoiceTask).options}
            onSubmitAnswer={answer}
            onSkipAnswer={onSkipAnswer}
          />
        ) : currentTask.type === TaskType.MultipleChoice ? (
          <MultipleChoiceTaskView
            options={(currentTask as IMultipleChoiceTask).options}
            onSubmitAnswer={answer}
            onSkipAnswer={onSkipAnswer}
          />
        ) : currentTask.type === TaskType.Open ? (
          <FreeTextTaskView
            onSubmitAnswer={answer}
            onSkipAnswer={onSkipAnswer}
          />
        ) : currentTask.type === TaskType.Code ? (
          <CodeTaskView onSubmitAnswer={answer} onSkipAnswer={onSkipAnswer} />
        ) : currentTask.type === TaskType.FixCode ? (
          <CodeTaskView
            onSubmitAnswer={answer}
            onSkipAnswer={onSkipAnswer}
            codeSnippet={currentTask?.content}
          />
        ) : (
          <PlaceHolderTaskView onSkipAnswer={onSkipAnswer} />
        )}
      </div>
    </Flex>
  );
};

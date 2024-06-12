import { Flex, Heading, Text } from "@radix-ui/themes";
import { FC, useCallback, useEffect, useState } from "react";
import { composeQuiz } from "../../api/api";
import { IMultipleChoiceTask, ISingleChoiceTask, SkillLevel, Task, TaskAnswer, TaskType } from "../../api/types";
import { QuizLoaderOverlay } from "./QuizLoaderOverlay/QuizLoaderOverlay";
import { CodeTaskView } from "./QuizTaskView/CodeTaskView";
import { DiagramTaskView } from "./QuizTaskView/DiagramTaskView";
import { FreeTextTaskView } from "./QuizTaskView/FreeTextTaskView";
import { MultipleChoiceTaskView } from "./QuizTaskView/MultipleChoiceTaskView";
import { PlaceHolderTaskView } from "./QuizTaskView/PlaceHolderTaskView";
import { SingleChoiceTaskView } from "./QuizTaskView/SingleChoiceTaskView";

const SKILL_NAME = "Node.js";
const SKILL_LEVEL = SkillLevel.Advanced;

export const QuizDemoPage: FC = (): React.ReactNode => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskIndex, setTaskIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, TaskAnswer>>({});

  useEffect(() => {
    composeQuiz({ skill: SKILL_NAME, level: SKILL_LEVEL }).then((tasks) => {
      setLoading(false);
      setTasks(tasks);
    }).catch((error) => {
      setLoading(false);
      setError(error.message);
    });

    // setTimeout(() => {
    //   setLoading(false);
    //   setTasks(MOCK_TASKS as Task[]);
    // }, 5000);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const submitAnswers = () => {
    console.log(answers);
  };

  const navigateToNextOrSubmit = useCallback(() => {
    if (taskIndex === tasks.length - 1) {
      submitAnswers();
    } else {
      setTaskIndex((prev) => prev + 1);
    }
  }, [tasks, submitAnswers, setTaskIndex, taskIndex]);

  const onSkipAnswer = useCallback(() => {
    navigateToNextOrSubmit();
  }, [navigateToNextOrSubmit]);

  const onSubmitAnswer = useCallback((answer: TaskAnswer) => {
    console.log('ANSWERS:', { ...answers, [taskIndex]: answer })
    setAnswers((prev) => ({ ...prev, [taskIndex]: answer }));
    navigateToNextOrSubmit();
  }, [setAnswers, navigateToNextOrSubmit, taskIndex, answers]);

  if (error) {
    return <Text color="red" size="9">{error}</Text>;
  }

  if (!tasks?.length || loading) {
    return <QuizLoaderOverlay loading={loading} />
  }

  const currentTask = tasks[taskIndex];

  return (
    <Flex direction="column" px="9" width="100%">
      <QuizLoaderOverlay loading={loading} />

      <Flex direction="row" align="center" gap="5" mt="9">
        <Heading size="8">SkillSync</Heading>
        <Heading size="6">|</Heading>
        <Heading size="6">{SKILL_LEVEL} <Text color="green" mr="1">{SKILL_NAME}</Text></Heading>
      </Flex>

      <Flex direction="column" gap="5" mt="5" mb="9">
        <Text size="6"><Text color="green" mr="1">#{taskIndex + 1}</Text> {currentTask.question}</Text>
      </Flex>

      <div className="w-full">
        {
          currentTask.type === TaskType.SingleChoice ? (
            <SingleChoiceTaskView
              options={(currentTask as ISingleChoiceTask).options}
              onSubmitAnswer={onSubmitAnswer}
              onSkipAnswer={onSkipAnswer}
            />
          ) : currentTask.type === TaskType.MultipleChoice ? (
            <MultipleChoiceTaskView
              options={(currentTask as IMultipleChoiceTask).options}
              onSubmitAnswer={onSubmitAnswer}
              onSkipAnswer={onSkipAnswer}
            />
          ) : currentTask.type === TaskType.FreeText ? (
            <FreeTextTaskView
              onSubmitAnswer={onSubmitAnswer}
              onSkipAnswer={onSkipAnswer}
            />
          ) : currentTask.type === TaskType.Code ? (
            <CodeTaskView
              onSubmitAnswer={onSubmitAnswer}
              onSkipAnswer={onSkipAnswer}
            />
          ) : currentTask.type === TaskType.Diagram ? (
            <DiagramTaskView
              onSubmitAnswer={onSubmitAnswer}
              onSkipAnswer={onSkipAnswer}
            />
          ) :
          <PlaceHolderTaskView onSkipAnswer={onSkipAnswer} />
        }
      </div>
    </Flex>
  );
};

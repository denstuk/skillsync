import { FC, useState } from "react";
import {
  MultipleChoiceTask,
  QuizResult,
  SingleChoiceTask,
  TaskType,
} from "../../types";
import { SingleChoiceQuestionCard } from "../SingleChoiceQuestionCard";
import { Box, Card, Flex, Heading, Text, TextArea } from "@radix-ui/themes";
import { TaskList } from "./TaskList";
import { MultipleChoiceTaskCard } from "../MultipleChoiceTaskCard";
import CodingFeedback from "../CodingFeedback";
import Markdown from "react-markdown";

type Props = {
  results: QuizResult["results"];
};

export const Results: FC<Props> = ({ results }) => {
  const [taskToShow, setTaskToShow] = useState<number>(0);

  const resultsToShow = results[taskToShow];

  const renderSingleFeedback = () => {
    return (
      <SingleChoiceQuestionCard
        options={(resultsToShow.task as SingleChoiceTask).options}
        answer={resultsToShow.answer as string}
        correct={resultsToShow.correct}
      />
    );
  };

  const renderMultiFeedback = () => {
    return (
      <MultipleChoiceTaskCard
        options={(resultsToShow.task as MultipleChoiceTask).options}
        answer={resultsToShow.answer as string[]}
        correct={resultsToShow.correct}
      />
    );
  };

  const renderFreeFormAnswer = () => {
    if (!resultsToShow.answer) {
      return (
        <Text ml={"2"} color="orange">
          {"No answer"}
        </Text>
      );
    }
    return (
      <TextArea
        variant="soft"
        readOnly={true}
        value={resultsToShow.answer as string}
        size="3"
      />
    );
  };
  const renderCodingAnswer = () => {
    return (
      <CodingFeedback
        task={resultsToShow.answer as string}
        solution={resultsToShow?.solution}
      />
    );
  };
  return (
    <Flex gap={"4"}>
      <TaskList
        results={results}
        openTaskResult={setTaskToShow}
        openTaskIndex={taskToShow}
      />
      <Flex
        direction={"column"}
        flexGrow={"1"}
        overflowY={"scroll"}
        height={"80vh"}
      >
        <Heading mb={"4"} size={"5"}>
          Your answer:
        </Heading>
        {resultsToShow.task.type === TaskType.SingleChoice
          ? renderSingleFeedback()
          : resultsToShow.task.type === TaskType.MultipleChoice
          ? renderMultiFeedback()
          : resultsToShow.task.type === TaskType.Open
          ? renderFreeFormAnswer()
          : resultsToShow.task.type === TaskType.Code ||
            resultsToShow.task.type === TaskType.FixCode
          ? renderCodingAnswer()
          : null}
        <Heading mt={"4"} mb={"4"} size={"5"}>
          Feedback:
        </Heading>
        <Box>
          <Card variant="classic">
            <Markdown>{resultsToShow.message}</Markdown>
          </Card>
        </Box>
      </Flex>
    </Flex>
  );
};

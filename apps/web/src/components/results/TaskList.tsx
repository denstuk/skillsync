import { Box, Flex, RadioCards, Text } from "@radix-ui/themes";
import { FC } from "react";
import { QuizResult } from "../../types";
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";

type Props = {
  results: QuizResult["results"];
  openTaskResult: (taskIndex: number) => void;
  openTaskIndex: number;
};

export const TaskList: FC<Props> = ({
  results,
  openTaskResult,
  openTaskIndex,
}) => {
  return (
    <Box
      flexGrow={"0"}
      flexBasis={"300px"}
      flexShrink={"0"}
      overflowY={"scroll"}
      height={"80vh"}
    >
      <RadioCards.Root>
        <Flex gap={"4"} direction={"column"} align={"start"}>
          {results.map((res, index) => {
            return (
              <RadioCards.Item
                key={index}
                value={res.task.question}
                onClick={() => {
                  openTaskResult(index);
                }}
                checked={index === openTaskIndex}
              >
                {res.correct ? (
                  <CheckCircledIcon color="green" />
                ) : (
                  <CrossCircledIcon color="red" />
                )}

                <Text ml={"2"} align={"left"}>
                  {res.task.question}
                </Text>
              </RadioCards.Item>
            );
          })}
        </Flex>
      </RadioCards.Root>
    </Box>
  );
};

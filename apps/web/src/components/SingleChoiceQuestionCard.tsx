import { FC } from "react";
import { Flex, RadioCards, Text } from "@radix-ui/themes";

type Props = {
  options: string[];
  answer?: string;
  onClick?: (option: string) => void;
  correct?: boolean;
};

export const SingleChoiceQuestionCard: FC<Props> = ({
  options,
  onClick,
  answer,
  correct,
}) => {
  const renderOption = (option: string, index: number) => {
    if (!answer) {
      return (
        <RadioCards.Item
          value={option}
          key={index}
          onClick={() => {
            onClick && onClick(option);
          }}
        >
          <Text size="4">{option}</Text>
        </RadioCards.Item>
      );
    }

    return (
      <RadioCards.Root color={correct ? undefined : "red"} key={index}>
        <RadioCards.Item
          value={option}
          onClick={() => {
            onClick && onClick(option);
          }}
          checked={option === answer}
        >
          <Text size="4">{option}</Text>
        </RadioCards.Item>
      </RadioCards.Root>
    );
  };

  return (
    <RadioCards.Root name="question" variant="surface">
      <Flex direction="column" gap="4" width="100%">
        {options.map((option, index) => renderOption(option, index))}
      </Flex>
    </RadioCards.Root>
  );
};

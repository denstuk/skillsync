import { Button, Flex, RadioCards, Text } from "@radix-ui/themes";
import { FC, useState } from "react";
import { IMultipleChoiceAnswer } from "../../../api/types";

type MultipleChoiceTaskViewProps = {
  options: string[];
  onSubmitAnswer: (answer: IMultipleChoiceAnswer) => void;
  onSkipAnswer: () => void;
};

export const MultipleChoiceTaskView: FC<MultipleChoiceTaskViewProps> = ({ options, onSubmitAnswer, onSkipAnswer }: MultipleChoiceTaskViewProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const onRadioCardClick = (option: string) => {
    const isSelected = selectedOptions.includes(option);

    if (isSelected) {
      setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const onSubmitButtonClick = () => {
    onSubmitAnswer({ answer: selectedOptions });
  };

  return (
    <Flex direction="column">

      <Flex direction="column" gap="4" width="100%">
        {options.map((option, index) => (
          <RadioCards.Root name="question" variant="surface">
            <RadioCards.Item
              checked={selectedOptions.includes(option)}
              value={option}
              key={index}
              onClick={() => onRadioCardClick(option)}
            >
              <Text size="4">{option}</Text>
            </RadioCards.Item>
          </RadioCards.Root>
        ))}
      </Flex>

      <Flex mt="9" gap="3">
        <Button size="4" color="gray" className="cursor-pointer w-full" onClick={onSkipAnswer}>Skip</Button>
        <Button size="4" color="green" className="cursor-pointer w-full" onClick={onSubmitButtonClick}>Submit</Button>
      </Flex>
    </Flex>
  )
};

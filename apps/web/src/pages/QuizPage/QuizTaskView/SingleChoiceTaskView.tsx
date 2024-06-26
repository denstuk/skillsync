import { Button, Flex } from "@radix-ui/themes";
import { FC, useState } from "react";
import { ISingleChoiceAnswer } from "../../../api/types";
import { SingleChoiceQuestionCard } from "../../../components/SingleChoiceQuestionCard";

type SingleChoiceTaskViewProps = {
  options: string[];
  onSubmitAnswer: (answer: ISingleChoiceAnswer) => void;
  onSkipAnswer: () => void;
};

export const SingleChoiceTaskView: FC<SingleChoiceTaskViewProps> = ({
  options,
  onSubmitAnswer,
  onSkipAnswer,
}: SingleChoiceTaskViewProps) => {
  const [selectedOption, setSelectedOption] = useState<string>();

  const onRadioCardClick = (option: string) => {
    setSelectedOption(option);
  };

  const onSubmitButtonClick = () => {
    onSubmitAnswer({ answer: selectedOption as string });
  };

  return (
    <Flex direction="column">
      <SingleChoiceQuestionCard options={options} onClick={onRadioCardClick} />
      <Flex mt="9" gap="3">
        <Button
          size="4"
          color="gray"
          className="cursor-pointer w-full"
          onClick={onSkipAnswer}
        >
          Skip
        </Button>
        <Button
          size="4"
          color="green"
          className="cursor-pointer w-full"
          onClick={onSubmitButtonClick}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

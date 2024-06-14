import { Button, Flex, TextField } from "@radix-ui/themes";
import { FC, useState } from "react";
import { IFreeTextAnswer } from "../../../api/types";

type FreeTextTaskViewProps = {
  onSubmitAnswer: (answer: IFreeTextAnswer) => void;
  onSkipAnswer: () => void;
};

export const FreeTextTaskView: FC<FreeTextTaskViewProps> = ({ onSubmitAnswer, onSkipAnswer }: FreeTextTaskViewProps) => {
  const [answerText, setAnswerText] = useState<string>('');

  const onSubmitButtonClick = () => {
    onSubmitAnswer({ answer: answerText });
  };

  return (
    <div className="w-full flex flex-col">
      <TextField.Root
        variant="surface"
        placeholder="Type answer..."
        value={answerText}
        onChange={(e) => setAnswerText(e.target.value)}
        style={{ width: '100%', height: '50px' }}
        size="3"
      />

      <Flex mt="9" gap="3">
        <Button size="4" color="gray" className="cursor-pointer w-full" onClick={onSkipAnswer}>Skip</Button>
        <Button size="4" color="green" className="cursor-pointer w-full" onClick={onSubmitButtonClick}>Submit</Button>
      </Flex>
    </div>
  )
};

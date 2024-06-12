import { Button, Flex } from "@radix-ui/themes";
import { FC } from "react";

type PlaceHolderTaskViewProps = {
  onSkipAnswer: () => void;
};

export const PlaceHolderTaskView: FC<PlaceHolderTaskViewProps> = ({ onSkipAnswer }: PlaceHolderTaskViewProps) => {
  return (
    <Flex mt="9" gap="3">
      <Button size="4" color="gray" className="cursor-pointer w-full" onClick={onSkipAnswer}>Skip</Button>
      <Button size="4" color="green" className="cursor-pointer w-full" onClick={onSkipAnswer} disabled={true}>Submit</Button>
    </Flex>
  );
}

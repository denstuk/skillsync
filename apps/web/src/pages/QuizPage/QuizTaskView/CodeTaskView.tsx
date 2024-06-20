import { Button, Flex } from "@radix-ui/themes";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/theme/material.css";
import { FC, useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { ICodeAnswer } from "../../../api/types";

type CodeTaskViewProps = {
  onSubmitAnswer: (answer: ICodeAnswer) => void;
  onSkipAnswer: () => void;
};

export const CodeTaskView: FC<CodeTaskViewProps> = ({ onSubmitAnswer, onSkipAnswer }: CodeTaskViewProps) => {
  const [value, setValue] = useState('');

  const onSubmitButtonClick = () => {
    onSubmitAnswer({ answer: value });
  };

  return (
    <Flex gap={"4"} direction={"column"}>

      <CodeMirror
        value={''}
        options={{
          mode: "javascript",
          theme: "material",
          lineNumbers: true,
        }}
        onChange={(_editor, _data, value) => {
          setValue(value);
        }}
      />

      <Flex mt="9" gap="3">
        <Button size="4" color="gray" className="cursor-pointer w-full" onClick={onSkipAnswer}>Skip</Button>
        <Button size="4" color="green" className="cursor-pointer w-full" onClick={onSubmitButtonClick}>Submit</Button>
      </Flex>
    </Flex>
  );
};

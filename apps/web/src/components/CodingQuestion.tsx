import "codemirror/mode/javascript/javascript.js";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import React, { useState } from "react";
import { Question } from "../types";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { Button, Flex, Heading } from "@radix-ui/themes";

interface QuestionProps {
  question: Question;
  onAnswer: (answer: string) => void;
}

const CodingQuestion: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  const initialValue = question?.snippet_content;
  const [value, setValue] = useState(initialValue || "");

  return (
    <Flex gap={"4"} direction={"column"}>
      <Heading>{question.question}</Heading>
      <CodeMirror
        //no need to make it controlled component
        value={initialValue}
        options={{
          mode: "javascript",
          theme: "material",
          lineNumbers: true,
        }}
        onChange={(_editor, _data, value) => {
          setValue(value);
        }}
      />
      <Flex justify={"end"}>
        <Button onClick={() => onAnswer(value)}>Submit</Button>
      </Flex>
    </Flex>
  );
};

export default CodingQuestion;

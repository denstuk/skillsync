import "codemirror/mode/javascript/javascript.js";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import React, { useState } from "react";
import { Question } from "../types";
import { UnControlled as CodeMirror } from "react-codemirror2";
import Button from "./form/Button";

interface QuestionProps {
  question: Question;
  onAnswer: (answer: string) => void;
}

const CodingQuestion: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  const initialValue = question?.snippet_content;
  const [value, setValue] = useState(initialValue || "");

  return (
    <div className="bg-white shadow-md rounded-lg w-full max-w-3xl p-6">
      <p className="text-xl font-bold">{question.question}</p>
      <CodeMirror
        //no need to make it controlled component
        value={initialValue}
        className="my-4"
        options={{
          mode: "javascript",
          theme: "material",
          lineNumbers: true,
        }}
        onChange={(_editor, _data, value) => {
          setValue(value);
        }}
      />
      <Button onClick={() => onAnswer(value)}>Submit</Button>
    </div>
  );
};

export default CodingQuestion;

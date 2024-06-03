import "codemirror/mode/javascript/javascript.js";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import React, { useState } from "react";
import { Question } from "../types";
import { UnControlled as CodeMirror } from "react-codemirror2";

interface QuestionProps {
  question: Question;
  onAnswer: (answer: string) => void;
}

const CodingQuestion: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  const initialValue = question?.snippet_content;
  const [value, setValue] = useState(initialValue);

  return (
    <div style={{ textAlign: "left" }}>
      {question.question}
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
      <button onClick={() => onAnswer(value)}>Submit</button>
    </div>
  );
};

export default CodingQuestion;

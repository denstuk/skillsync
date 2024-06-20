import "codemirror/mode/javascript/javascript.js";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import React, { useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { Checkbox, Flex } from "@radix-ui/themes";
import FormLabel from "./form/FormLabel";

interface FeedbackProps {
  task: string;
  solution?: string;
}

const CodingFeedback: React.FC<FeedbackProps> = ({ task, solution }) => {
  const [showSolution, setShowSolution] = useState(true);

  return (
    <Flex direction={"column"} gap={"4"}>
      <FormLabel>
        <Flex gap="2">
          <Checkbox
            checked={showSolution}
            onCheckedChange={() => {
              setShowSolution(!showSolution);
            }}
          />
          Show Solution
        </Flex>
      </FormLabel>

      {showSolution ? (
        <CodeMirror
          value={solution}
          options={{
            mode: "javascript",
            theme: "material",
            lineNumbers: true,
            readOnly: "nocursor",
          }}
        />
      ) : (
        <CodeMirror
          value={task}
          options={{
            mode: "javascript",
            theme: "material",
            lineNumbers: true,
            readOnly: "nocursor",
          }}
        />
      )}
    </Flex>
  );
};

export default CodingFeedback;

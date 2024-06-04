import "codemirror/mode/javascript/javascript.js";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import React, { useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";

interface FeedbackProps {
  solution: string;
  task: string;
}

const CodingFeedback: React.FC<FeedbackProps> = ({ task, solution }) => {
  const [showSolution, setShowSolution] = useState(true);
  return (
    <div className="text-left mb-4">
      <input
        id="solultion"
        type="checkbox"
        checked={showSolution}
        value={"Solution"}
        onChange={() => {
          setShowSolution(!showSolution);
        }}
      />
      <label htmlFor="solultion">Show Solution</label>
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
    </div>
  );
};

export default CodingFeedback;

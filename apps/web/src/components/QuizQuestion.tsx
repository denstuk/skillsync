import React from "react";
import { Question as QuestionType } from "../types";

interface QuestionProps {
  question: QuestionType;
  onAnswer: (answer: string) => void;
}

const QuizQuestion: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  return (
    <div className="bg-white shadow-md rounded-lg w-full max-w-3xl p-6">
      <h2 className="text-xl font-bold">{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li
            className="shadow-md p-4 mt-4 hover:bg-blue-300 rounded-lg text-l font-bold"
            key={index}
            onClick={() => onAnswer(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizQuestion;

import React from 'react';
import { Question as QuestionType } from '../types';

interface QuestionProps {
  question: QuestionType;
  onAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  return (
    <div className="question">
      <h2>{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li key={index} onClick={() => onAnswer(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;

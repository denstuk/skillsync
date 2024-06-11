import React, { useState } from "react";
import { Question as QuestionType } from "../types";
import { Button, Flex, RadioCards } from "@radix-ui/themes";

interface QuestionProps {
  question: QuestionType;
  onAnswer: (answer: string) => void;
}

const QuizQuestion: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<string>();
  return (
    <Flex direction={"column"} gap={"4"}>
      <h2 className="text-xl font-bold">{question.question}</h2>

      <RadioCards.Root name="question" variant="surface" size={"3"}>
        <Flex direction={"column"} gap={"4"}>
          {question.options.map((option, index) => (
            <RadioCards.Item
              value={option}
              className="shadow-md p-4 mt-4 hover:bg-blue-300 rounded-lg text-l font-bold"
              key={index}
              onClick={() => setSelectedOption(option)}
            >
              {option}
            </RadioCards.Item>
          ))}
        </Flex>
      </RadioCards.Root>
      <Flex justify={"end"}>
        <Button
          onClick={() => {
            onAnswer(selectedOption || "");
          }}
          disabled={!selectedOption}
        >
          Answer
        </Button>
      </Flex>
    </Flex>
  );
};

export default QuizQuestion;

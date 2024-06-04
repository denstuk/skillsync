import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuestionType, QuizData } from "../types";
import Input from "../components/form/Input";
import FormLabel from "../components/form/FormLabel";
import Layout from "../components/Layout";
import Button from "../components/form/Button";

interface HomePageProps {
  startQuiz: (data: QuizData) => void;
}

const HomePage: React.FC<HomePageProps> = ({ startQuiz }) => {
  const [topic, setTopic] = useState("");
  const [subtopics, setSubtopics] = useState("");
  const [numQuestions, setNumQuestions] = useState(1);
  const [questionType, setQuestionType] = useState<QuestionType>("coding");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const quizData: QuizData = { topic, numQuestions, questionType, subtopics };
    startQuiz(quizData);
    navigate("/quiz");
  };

  const renderAdditionalOptions = useMemo(() => {
    if (questionType === "quiz") {
      return (
        <FormLabel>
          Number of Questions:
          <Input
            type="number"
            value={numQuestions}
            onChange={(e) => setNumQuestions(parseInt(e.target.value))}
            min="1"
            max="15"
            required
          />
        </FormLabel>
      );
    }
    if (questionType === "coding") {
      return (
        <div>
          <FormLabel htmlFor="subtopics">
            Provide subtopics which you want task to be based on:
          </FormLabel>
          <textarea
            className="w-full mt-2 mb-6 rounded-md border h-[30px] min-h-[30px] border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            name="subtopics"
            id="subtopics"
            value={subtopics}
            onChange={(e) => setSubtopics(e.target.value)}
            required
          />
        </div>
      );
    }
  }, [numQuestions, questionType, subtopics]);

  return (
    <Layout>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg w-full max-w-3xl p-6"
      >
        <FormLabel>
          Quiz Topic:
          <Input
            placeholder="For example: React.js"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />
        </FormLabel>
        <FormLabel className="text-lg font-bold" htmlFor="q-type">
          QuestionType:
        </FormLabel>
        <select
          name="q-type"
          id="q-type"
          className="px-1 mt-2 mb-6 font-sans font-normal h-[30px] border rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          onChange={(e) => {
            setQuestionType(e.target.value as QuestionType);
          }}
        >
          <option value="coding">Coding</option>
          <option value="quiz">Quiz</option>
        </select>
        <div>{renderAdditionalOptions}</div>
        <Button>Start</Button>
      </form>
    </Layout>
  );
};

export default HomePage;

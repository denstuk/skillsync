import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuestionType, QuizData } from "../types";

interface HomePageProps {
  startQuiz: (data: QuizData) => void;
}

const HomePage: React.FC<HomePageProps> = ({ startQuiz }) => {
  const [topic, setTopic] = useState("React.js Expert");
  const [subtopics, setSubtopics] = useState("");
  const [numQuestions, setNumQuestions] = useState(5);
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
        <label>
          Number of Questions:
          <input
            type="number"
            value={numQuestions}
            onChange={(e) => setNumQuestions(parseInt(e.target.value))}
            min="1"
            max="15"
            required
          />
        </label>
      );
    }
    if (questionType === "coding") {
      return (
        <div>
          <label htmlFor="subtopics" style={{ display: "block" }}>
            Provide subtopics which you want task to be based on:
          </label>
          <textarea
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
    <div className="home-page">
      <h1>Welcome to the Quiz App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Quiz Topic:
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />
        </label>
        <br />
        <br />
        <label htmlFor="q-type">QuestionType:</label>
        <select
          name="q-type"
          id="q-type"
          onChange={(e) => {
            setQuestionType(e.target.value as any);
          }}
        >
          <option value="coding">Coding</option>
          <option value="quiz">Quiz</option>
        </select>
        <br />
        <div>{renderAdditionalOptions}</div>

        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
};

export default HomePage;

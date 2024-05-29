import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizData } from '../types';

interface HomePageProps {
  startQuiz: (data: QuizData) => void;
}

const HomePage: React.FC<HomePageProps> = ({ startQuiz }) => {
  const [topic, setTopic] = useState('React.js Expert');
  const [numQuestions, setNumQuestions] = useState(5);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const quizData: QuizData = { topic, numQuestions };
    startQuiz(quizData);
    navigate('/quiz');
  };

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
        <br/>
        <label>
          Number of Questions:
          <input
            type="number"
            value={numQuestions}
            onChange={(e) => setNumQuestions(parseInt(e.target.value))}
            min="2"
            max="15"
            required
          />
        </label>
        <br/>
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
};

export default HomePage;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AnswerResponse } from "../types";
import { resetMessageHistory } from "../api.ts";

interface ResultsPageProps {
  results: AnswerResponse | null;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ results }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!results) {
      navigate("/");
    }
  }, [navigate]);

  const handleClick = () => {
    resetMessageHistory();
    navigate("/");
  };

  if (!results) return null;

  return (
    <div className="results-page">
      <h1>Quiz Results</h1>
      <p>
        You answered {results.score} out of {results.total_questions} questions
        correctly.
      </p>
      <p>{results.feedback}</p>
      <button onClick={handleClick}>Go to Home</button>
    </div>
  );
};

export default ResultsPage;

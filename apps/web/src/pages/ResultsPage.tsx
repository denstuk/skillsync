import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AnswerResponse } from "../types";
import CodingFeedback from "../components/CodingFeedback";

interface ResultsPageProps {
  results: AnswerResponse | null;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ results }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!results) {
      navigate("/");
    }
  }, [navigate, results]);

  const handleClick = () => {
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
      {results?.feedback_code && (
        <>
          <p>Solution:</p>
          <CodingFeedback
            task={results?.feedback_code}
            solution={results.snippet_content}
          />
        </>
      )}
      <button onClick={handleClick}>Go to Home</button>
    </div>
  );
};

export default ResultsPage;

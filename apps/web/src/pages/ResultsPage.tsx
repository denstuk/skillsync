import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AnswerResponse } from "../types";
import CodingFeedback from "../components/CodingFeedback";
import Layout from "../components/Layout";
import Button from "../components/form/Button";

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
    <Layout>
      <h2 className="text-xl font-bold">Quiz Results</h2>
      <div className="bg-white shadow-md rounded-lg w-full  p-6 my-4">
        <p className="text-lg font-bold text-center">{results.feedback}</p>
      </div>
      {results?.feedback_code && (
        <>
          <p className="text-lg font-bold text-center">Solution:</p>
          <CodingFeedback
            task={results.snippet_content || ""}
            solution={results?.feedback_code}
          />
        </>
      )}
      <Button onClick={handleClick}>Go to Home</Button>
    </Layout>
  );
};

export default ResultsPage;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AnswerResponse } from "../types";
import CodingFeedback from "../components/CodingFeedback";
import Layout from "../components/Layout";
import { Button, Flex, Heading, Text } from "@radix-ui/themes";

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
      <Flex direction={"column"} gap={"4"}>
        <Heading>Quiz Results</Heading>

        <Text as="div" size={"4"}>
          {results.feedback}
        </Text>

        {results?.feedback_code && (
          <>
            <Heading size={"5"}>Solution:</Heading>
            <CodingFeedback
              task={results.snippet_content || ""}
              solution={results?.feedback_code}
            />
          </>
        )}
        <Flex justify={"center"}>
          <Button onClick={handleClick}>Go to Home</Button>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default ResultsPage;

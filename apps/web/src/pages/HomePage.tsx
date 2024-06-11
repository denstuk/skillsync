import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuestionType, QuizData } from "../types";
import FormLabel from "../components/form/FormLabel";
import Layout from "../components/Layout";
import {
  Box,
  Button,
  Container,
  Flex,
  Select,
  TextArea,
  TextField,
} from "@radix-ui/themes";

interface HomePageProps {
  startQuiz: (data: QuizData) => void;
}

const HomePage: React.FC<HomePageProps> = ({ startQuiz }) => {
  const [topic, setTopic] = useState("");
  const [subtopics, setSubtopics] = useState("");
  const [numQuestions, setNumQuestions] = useState(1);
  const [questionType, setQuestionType] = useState<QuestionType>("quiz");
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
          <TextField.Root
            placeholder="E.g. 3"
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
        <FormLabel htmlFor="subtopics">
          Provide subtopics which you want task to be based on:
          <TextArea
            placeholder="Subtopics..."
            id={"subtopics"}
            onChange={(e) => {
              setSubtopics(e.target.value);
            }}
          />
        </FormLabel>
      );
    }
  }, [numQuestions, questionType]);

  return (
    <Layout>
      <Flex direction="column" gap="3">
        <FormLabel>
          Quiz Topic:
          <TextField.Root
            placeholder="React.js"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />
        </FormLabel>
        <Container>
          <Box>
            <FormLabel htmlFor="q-type">QuestionType:</FormLabel>
          </Box>
          <Select.Root
            defaultValue="quiz"
            name="q-type"
            onValueChange={(value) => {
              setQuestionType(value as QuestionType);
            }}
          >
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="quiz">Quiz</Select.Item>
              <Select.Item value="coding">Coding</Select.Item>
            </Select.Content>
          </Select.Root>
        </Container>
        <Box>{renderAdditionalOptions}</Box>
        <Flex justify={"end"}>
          <Button onClick={handleSubmit}>Start</Button>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default HomePage;

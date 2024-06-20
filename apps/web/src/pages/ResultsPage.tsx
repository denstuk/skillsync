import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { Button, Card, Flex, Tabs, Text } from "@radix-ui/themes";
import { submitQuiz } from "../api/api";
import { AnswerResponse, QuizResult } from "../types";
import { Results } from "../components/results/Results";
// MOCKS. REMOVE LATER AFTER INTEGRATION
const mockSubmit = {
  tasks: [
    {
      type: "SingleChoice",
      question: "Which of the following is NOT a built-in React hook?",
      options: ["useState", "useEffect", "useContext", "useMyCustomHook"],
      answer: "useMyCustomHook",
    },
    {
      type: "Open",
      question:
        "Describe the purpose of the `useEffect` hook in React. What are some common use cases?",
    },
    {
      type: "MultipleChoice",
      question:
        "Which of the following techniques can help improve React performance?",
      options: [
        "Memoization",
        "Lazy loading",
        "Profiling tools",
        "Using `setState` for every change",
        "Heavy DOM manipulations",
      ],
    },
    {
      type: "Code",
      question:
        "Write a simple React component that uses memoization to optimize performance.",
    },
    {
      type: "SingleChoice",
      question: "What is the primary benefit of using React's Context API?",
      options: [
        "State management across multiple components without prop drilling",
        "Improved component reusability",
        "Enhanced performance optimization",
        "Simplified routing implementation",
      ],
    },
    {
      type: "Open",
      question:
        "Explain the difference between shallow and deep comparison in React's `useMemo` hook.",
    },
    {
      type: "MultipleChoice",
      question:
        "Which of the following libraries are commonly used for testing React applications?",
      options: ["Jest", "Enzyme", "React Router", "Redux", "Cypress"],
    },
    {
      type: "Code",
      question:
        "Write a Jest test for a simple React component that renders a heading element.",
    },
    {
      type: "SingleChoice",
      question:
        "What is the main advantage of using a state management library like Redux in React applications?",
      options: [
        "Improved component reusability",
        "Enhanced performance optimization",
        "Centralized state management and data flow",
        "Simplified routing implementation",
      ],
    },
    {
      type: "Open",
      question:
        "Describe the concept of 'prop drilling' in React and how state management libraries can help address it.",
    },
    {
      type: "SingleChoice",
      question:
        "Which library is commonly used for implementing routing in React applications?",
      options: ["React Router", "Redux", "Jest", "Enzyme"],
    },
    {
      type: "Open",
      question:
        "Explain how server-side rendering (SSR) can improve the performance and SEO of a React application.",
    },
    {
      type: "MultipleChoice",
      question:
        "Which of the following frameworks or libraries are known for their server-side rendering capabilities?",
      options: ["Next.js", "Gatsby", "React Router", "Redux"],
    },
    {
      type: "Open",
      question:
        "What are some key considerations when choosing between using React Native and a native mobile development approach?",
    },
  ],
  answers: [
    {
      answer: "useMyCustomHook",
    },
    {
      answer:
        "executing side effects and accessing some methods  of life cycle of react components",
    },
    {
      answer: ["Memoization", "Lazy loading", "Profiling tools"],
    },
    {
      answer:
        "const Comp = React.memo(({prop1, prop2}) => {\n return <div>{prop1}{prop2}<div>\n})",
    },
    {
      answer:
        "State management across multiple components without prop drilling",
    },
    {
      answer:
        "shallow comparison happens by reference deep by comparing values",
    },
    {
      answer: ["Jest", "Enzyme", "Cypress"],
    },
    {
      answer:
        "it('test heading', ()=>{\n const render = render(<Heading/>)\n expect(screenHelper.toBeOnScreen('h1')).toBe(true)\n})",
    },
    {
      answer: "Enhanced performance optimization",
    },
    {
      answer:
        "since you can only pass to component prop as parameter if you want to pass some state from parent component down multiple level to child. you would unnessesary pass it through  middle component which may not use it at all. code become overall verbose",
    },
    {
      answer: "React Router",
    },
    {
      answer:
        "just by rendering intial page on server so browser ready to display static document and don't wait till all js downloaded and rendered by react. seo improved just by providing static initial page so crawlers can easier process your page and index it",
    },
    {
      answer: ["Gatsby", "Next.js"],
    },
    {
      answer:
        "js as core tech stack for mobile development can give you benefits like reusable code and reducing cost by time and resources need to develop and support two separate native app. But native apps more perfomant",
    },
  ],
};

interface ResultsPageProps {
  results: AnswerResponse | null;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ results }) => {
  const navigate = useNavigate();
  const [resutl, setResult] = useState<QuizResult>();

  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    submitQuiz(mockSubmit).then((res) => {
      setResult(res);
      navigate("/results", { state: res });
    });
  }, [navigate]);
  if (!resutl?.results) return null;

  return (
    <Layout isResult>
      <Flex direction={"column"} gap={"4"}>
        <Tabs.Root defaultValue="account">
          <Tabs.List mb={"4"}>
            <Tabs.Trigger value="overall">Overall</Tabs.Trigger>
            <Tabs.Trigger value="detailed">Detailed</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="overall">
            <Card variant="ghost">
              <Text as="div" size={"4"}>
                {resutl?.recommendations}
              </Text>
            </Card>
          </Tabs.Content>
          <Tabs.Content value="detailed">
            <Results results={resutl?.results} />
          </Tabs.Content>
        </Tabs.Root>
        <Flex justify={"center"}>
          <Button onClick={handleClick}>Go to Home</Button>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default ResultsPage;

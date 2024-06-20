import { useLocation, Location } from "react-router-dom";
import Layout from "../components/Layout";
import { Box, Card, Flex, Text, Tabs } from "@radix-ui/themes";
import { QuizResult } from "../types";
import { Results } from "../components/results/Results";
import Markdown from "react-markdown";

const ResultsPage: React.FC = () => {
  const location: Location<QuizResult> = useLocation();

  const results = location?.state;

  if (!results) return null;

  return (
    <Layout isResult>
      <Flex direction={"column"} gap={"4"}>
        <Tabs.Root defaultValue="overall">
          <Tabs.List mb={"4"}>
            <Tabs.Trigger value="overall">Overall</Tabs.Trigger>
            <Tabs.Trigger value="detailed">Detailed</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="overall">
            <Box overflowY={"scroll"} height={"85vh"}>
              <Card variant="ghost">
                <Text color="green" size={"6"}>
                  SCORE:{" "}
                </Text>
                <Text size={"6"} color="amber">
                  {results?.score}
                </Text>
                <Text size={"6"}> / </Text>
                <Text size={"6"}>{results?.totalScore}</Text>
                <Markdown>{results?.recommendations}</Markdown>
              </Card>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="detailed">
            <Results results={results?.results} />
          </Tabs.Content>
        </Tabs.Root>
      </Flex>
    </Layout>
  );
};

export default ResultsPage;

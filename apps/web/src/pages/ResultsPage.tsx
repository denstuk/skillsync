import { FC } from "react";
import { RouteProps, useLocation, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { Button, Flex, Heading, Text } from "@radix-ui/themes";

const ResultsPage: FC<RouteProps> = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Layout>
      <Flex direction={"column"} gap={"4"}>
        <Heading>Quiz Results</Heading>

        <Text as="div" size={"4"}>
          {state?.recommendations}
        </Text>

        {/* {session?.session?.results?.feedback_code && (
          <>
            <Heading size={"5"}>Solution:</Heading>
            <CodingFeedback
              task={session?.session?.results.snippet_content || ""}
              solution={session?.session?.results?.feedback_code}
            />
          </>
        )} */}
        <Flex justify={"center"}>
          <Button onClick={handleClick}>Go to Home</Button>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default ResultsPage;

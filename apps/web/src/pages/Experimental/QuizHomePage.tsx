import { Avatar, Button, Flex, Heading } from "@radix-ui/themes";
import { FC, useEffect, useState } from "react";
import { QuizLoaderOverlay } from "./QuizLoaderOverlay/QuizLoaderOverlay";

export const QuizHomePage: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  if (loading) {
    return <QuizLoaderOverlay loading={loading} />
  }

  return (
    <Flex direction="column" px="9" width="100%">
      <Flex direction="row" align="center" justify="between" gap="5" mt="9">
        <Heading size="8">SkillSync</Heading>
        <Avatar
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
        />
      </Flex>

      <Flex mt="9" direction="column">
        <Heading size="9" mt="9">AI-Based Skill Check Platform</Heading>
        <Heading size="5" mt="1" color="gray">A self-evaluation system that allows employees to verify any skill from EPAM LevelUp. Each check contains tasks specific to the skill, identifies the skill level, and produces a personalized improvement plan</Heading>
      </Flex>

      <Flex mt="9">
        <Button size="4" color="green">Get Started</Button>
      </Flex>
    </Flex>
  );
};

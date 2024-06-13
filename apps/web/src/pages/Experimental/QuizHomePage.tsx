import {
  Avatar,
  Button,
  Flex,
  Heading,
  Select,
  TextField,
} from "@radix-ui/themes";
import { FC, useState } from "react";
import FormLabel from "../../components/form/FormLabel";
import { SkillLevel } from "../../api/types";
import { useNavigate } from "react-router-dom";

export const QuizHomePage: FC = () => {
  const [skill, setSkill] = useState("");
  const navigate = useNavigate();
  const [level, setLevel] = useState(SkillLevel.Advanced);

  const startQuiz = () => {
    const queryParams = new URLSearchParams({ skill, level });
    navigate(`/quiz?${queryParams.toString()}`);
  };

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
        <Heading size="9" mt="9">
          AI-Based Skill Check Platform
        </Heading>
        <Heading size="5" mt="1" color="gray">
          A self-evaluation system that allows employees to verify any skill
          from EPAM LevelUp. Each check contains tasks specific to the skill,
          identifies the skill level, and produces a personalized improvement
          plan
        </Heading>
      </Flex>
      <Flex mt="5" gap={"4"} direction={"column"}>
        <FormLabel>
          Skill
          <TextField.Root
            mt={"4"}
            placeholder="Type in skill you want to check. E.g. React.js"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            required
          />
        </FormLabel>

        <Flex gap={"4"} align={"center"}>
          <FormLabel htmlFor="skill">QuestionType:</FormLabel>

          <Select.Root
            defaultValue={SkillLevel.Advanced}
            name="skill"
            onValueChange={(value) => {
              setLevel(value as SkillLevel);
            }}
          >
            <Select.Trigger />
            <Select.Content>
              <Select.Item value={SkillLevel.Novice}>
                {SkillLevel.Novice}
              </Select.Item>
              <Select.Item value={SkillLevel.Intermediate}>
                {SkillLevel.Intermediate}
              </Select.Item>
              <Select.Item value={SkillLevel.Advanced}>
                {SkillLevel.Advanced}
              </Select.Item>
              <Select.Item value={SkillLevel.Expert}>
                {SkillLevel.Expert}
              </Select.Item>
            </Select.Content>
          </Select.Root>
        </Flex>
      </Flex>
      <Flex mt="9">
        <Button size="4" color="green" onClick={startQuiz}>
          Get Started
        </Button>
      </Flex>
    </Flex>
  );
};

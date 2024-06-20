import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { FC, PropsWithChildren, useContext } from "react";
import { SkillAndLevelContext } from "../context/SkillAndLevelContext";
interface Props extends PropsWithChildren {
  isResult?: boolean;
}
const Layout: FC<Props> = ({ children, isResult = false }) => {
  const { skill, level } = useContext(SkillAndLevelContext);
  return (
    <Box height={"100vh"}>
      <Flex direction="column" px="9">
        <Flex direction="row" align="center" gap="5">
          <Heading size="8">SkillSync</Heading>
          <Heading size="6">|</Heading>
          <Heading size="6">
            {level || "Advanced"}{" "}
            <Text color="green" mr="1">
              {skill || "React.js"}
            </Text>
          </Heading>
          {isResult && (
            <>
              <Heading size="6">|</Heading>
              <Heading size="6">Quiz Results</Heading>
            </>
          )}
        </Flex>
        {children}
      </Flex>
    </Box>
  );
};

export default Layout;

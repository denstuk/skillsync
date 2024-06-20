import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import { FC, PropsWithChildren, useContext } from "react";
import { SkillAndLevelContext } from "../context/SkillAndLevelContext";
import { useNavigate } from "react-router-dom";
interface Props extends PropsWithChildren {
  isResult?: boolean;
}
const Layout: FC<Props> = ({ children, isResult = false }) => {
  const navigate = useNavigate();
  const { skill, level } = useContext(SkillAndLevelContext);
  const handleClick = () => {
    navigate("/");
  };
  return (
    <Box height={"100vh"}>
      <Flex direction="column" px="9">
        <Flex direction={"row"} justify={"between"}>
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
          {isResult && (
            <Flex align={"end"}>
              <Button onClick={handleClick}>Go to Home</Button>
            </Flex>
          )}
        </Flex>
        {children}
      </Flex>
    </Box>
  );
};

export default Layout;

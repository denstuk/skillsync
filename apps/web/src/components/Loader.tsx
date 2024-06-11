import { Box, Card, Flex, Spinner } from "@radix-ui/themes";
import React from "react";
// TODO: refator to skeleton
const LoaderOverlay: React.FC = () => {
  return (
    <Box position={"absolute"} top={"0"} right={"0"} bottom={"0"} left={"0"}>
      <Card>
        <Flex gap="4" align={"center"} justify={"center"} height={"100vh"}>
          <Spinner loading={true} size={"3"}></Spinner>
        </Flex>
      </Card>
    </Box>
  );
};

export default LoaderOverlay;

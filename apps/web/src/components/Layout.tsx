import { Card, Container, Heading, Section } from "@radix-ui/themes";
import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header>
        <Section size={"1"}>
          <Heading size="7" weight="bold">
            SkillSync
          </Heading>
        </Section>
      </header>
      <main>
        <Container align={"center"}>
          <Card>{children}</Card>
        </Container>
      </main>
    </>
  );
};

export default Layout;

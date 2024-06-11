import { FC } from "react";
import { Text, TextProps } from "@radix-ui/themes";

const FormLabel: FC<TextProps> = (props) => {
  return (
    <Text size="2" mb="1" weight="bold" as="label" {...props}>
      {props.children}
    </Text>
  );
};

export default FormLabel;

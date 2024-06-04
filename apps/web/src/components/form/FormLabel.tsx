import { FC, LabelHTMLAttributes } from "react";

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {}

const FormLabel: FC<Props> = (props) => {
  return (
    <label className="block text-lg font-bold" {...props}>
      {props.children}
    </label>
  );
};

export default FormLabel;

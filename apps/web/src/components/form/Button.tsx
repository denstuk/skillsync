import { ButtonHTMLAttributes, FC } from "react";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button
      type="submit"
      className="border border-slate-300 rounded-lg p-2 shadow-sm bg-sky-500 hover:bg-sky-700 text-white"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;

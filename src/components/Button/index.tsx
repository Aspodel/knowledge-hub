import React from "react";
import { tuple } from "../../utils/type";
import "./Button.scss";

const ButtonTypes = tuple("primary", "outlined", "text", "link");
type ButtonType = typeof ButtonTypes[number];

export interface IButtonProps {
  type?: ButtonType;
  variant?: "primary" | "secondary" | "text";
  className?: string;
  children?: React.ReactNode;
  disable?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  disable = false,
  onClick,
  variant = "primary",
  className = "",
  children,
}: IButtonProps) => {
  const _className = `button -${variant}${
    disable ? " -disable" : ""
  } ${className}`;

  // console.log(disable && "disable");
  // console.log(className);

  return (
    <button onClick={onClick} disabled={disable} className={_className}>
      {children}
    </button>
  );
};

export default React.memo(Button);

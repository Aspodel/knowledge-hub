import React from "react";

export interface IButton {
  disable?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary" | "text";
  className?: string;
  children?: React.ReactNode;
}

const Button = ({
  disable = false,
  onClick,
  variant = "primary",
  className = "",
  children,
}: IButton) => {
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

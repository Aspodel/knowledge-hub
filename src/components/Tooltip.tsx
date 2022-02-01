import React from "react";

type TooltipProps = {
  content?: string;
  children?: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
};

const Tooltip = ({ content, children, position = "right" }: TooltipProps) => {
  return (
    <span className="tooltip">
      {children}
      <span className={`tooltiptext -${position}`}>{content}</span>
    </span>
  );
};

export default React.memo(Tooltip);

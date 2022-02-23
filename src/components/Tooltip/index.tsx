import React from "react";
import { tuple } from "../../utils/type";
import "./Tooltip.scss";

const TooltipPositions = tuple("top", "bottom", "left", "right");
type TooltipPosition = typeof TooltipPositions[number];

type TooltipProps = {
  content?: string;
  children?: React.ReactNode;
  position?: TooltipPosition;
};

const Tooltip = ({ content, children, position = "top" }: TooltipProps) => {
  return (
    <span className="tooltip">
      {children}
      <span className={`tooltiptext -${position}`}>{content}</span>
    </span>
  );
};

export default React.memo(Tooltip);

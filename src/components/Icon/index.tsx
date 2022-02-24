import React from "react";
import { StyledIcon } from "@styled-icons/styled-icon";
import { joinClassnames } from "../../utils/helpers";
import { Color } from "../../utils/enum";

interface IIconProps {
  icon: StyledIcon;
  size?: number;
  color?: Color;
  className?: string;
}

const Icon = ({
  icon: IconCmp,
  size = 18,
  color = Color.Default,
  className,
}: IIconProps) => {
  return (
    <span
      className={joinClassnames(["icon", className])}
      style={{ display: "inline-flex", color: color }}
    >
      {IconCmp && <IconCmp size={size} />}
    </span>
  );
};

export default Icon;

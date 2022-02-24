import React from "react";
import { StyledIcon } from "@styled-icons/styled-icon";
import { joinClassnames } from "../../utils/helpers";
import { Color } from "../../utils/enum";

interface IIconProps {
  icon: StyledIcon;
  size?: number;
  color?: Color;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

const Icon = ({
  icon: IconCmp,
  size = 18,
  color = Color.Default,
  className,
  style,
  onClick,
}: IIconProps) => {
  let defaultStyles = {
    display: "inline-flex",
    alignItems: "center",
    color: color,
    // cursor: "pointer",
  };
  let styles = { ...defaultStyles, ...style };

  return (
    <span
      className={joinClassnames(["icon", className])}
      style={styles}
      onClick={onClick}
    >
      <IconCmp size={size} />
    </span>
  );
};

export default Icon;

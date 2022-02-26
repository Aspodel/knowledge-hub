import React from "react";
import "./styles.scss";
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
  size = 24,
  color,
  className,
  style,
  onClick,
}: IIconProps) => {
  let defaultStyles = { color: color };
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

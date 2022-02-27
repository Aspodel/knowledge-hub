import React from "react";
import "./Heading.scss";
import { Color } from "../../utils/enum";
import { tupleNum } from "../../utils/type";
import { joinClassnames } from "../../utils/helpers";

const HeadingSizes = tupleNum(1, 2, 3, 4, 5, 6);
type HeadingSize = typeof HeadingSizes[number];

interface IHeadingProps {
  size?: HeadingSize;
  bulletColor?: Color;
  children: React.ReactNode;
}

const Heading = ({
  size = 4,
  bulletColor = Color.Green,
  children,
}: IHeadingProps) => {
  return (
    <div className={joinClassnames(["heading", "h" + size])}>
      <div
        className="heading__bullet"
        style={{ backgroundColor: bulletColor }}
      />
      <span>{children}</span>
    </div>
  );
};

export default Heading;

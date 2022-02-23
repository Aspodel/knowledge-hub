import React from "react";
import "./Heading.scss";
import { BulletColor } from "../../utils/enum";
import { tupleNum } from "../../utils/type";

const HeadingSizes = tupleNum(1, 2, 3, 4, 5, 6);
type HeadingSize = typeof HeadingSizes[number];

interface IHeadingProps {
  size?: HeadingSize;
  bulletColor?: BulletColor;
  children: React.ReactNode;
}

const Heading = ({
  size,
  bulletColor = BulletColor.Green,
  children,
}: IHeadingProps) => {
  return (
    <div className="heading">
      <div
        className="heading__bullet"
        style={{ backgroundColor: bulletColor }}
      />
      <span>{children}</span>
    </div>
  );
};

export default Heading;

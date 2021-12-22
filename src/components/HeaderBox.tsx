import React from "react";
import { BulletColor } from "../utils/enum";

type HeaderBoxProps = {
  bulletColor?: BulletColor;
  children: React.ReactNode;
};

const HeaderBox = ({
  bulletColor = BulletColor.Green,
  children,
}: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <div
        className="header-box__bullet"
        style={{ backgroundColor: bulletColor }}
      />
      <div className="header-box__content">{children}</div>
    </div>
  );
};

export default React.memo(HeaderBox);

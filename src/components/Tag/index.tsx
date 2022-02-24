import React from "react";
import { joinClassnames } from "../../utils/helpers";
import { tuple } from "../../utils/type";
import "./Tag.scss";

const TagColors = tuple("default", "blue", "green", "orange", "purple");
type TagColor = typeof TagColors[number];

interface ITagProps {
  color?: TagColor;
  children: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
}

const Tag = ({
  color = "default",
  children,
  closable = false,
  onClose,
}: ITagProps) => {
  let classNames = joinClassnames(["tag", "tag--" + color]);
  return (
    <span className={classNames}>
      {children}
      {closable && <span className="close-symbol" onClick={onClose} />}
    </span>
  );
};

export default Tag;

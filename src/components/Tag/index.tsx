import React from "react";
import "./Tag.scss";

interface ITagProps {
  children: React.ReactNode;
  closable?: boolean;
  onClose: () => void;
}

const Tag = ({ children, closable = false, onClose }: ITagProps) => {
  return (
    <span className="tag">
      {children}
      {closable && <span className="close-symbol" onClick={onClose} />}
    </span>
  );
};

export default Tag;

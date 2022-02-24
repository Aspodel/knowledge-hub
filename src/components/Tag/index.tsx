import { X } from "@styled-icons/heroicons-outline";
import React from "react";
import { joinClassnames } from "../../utils/helpers";
import { tuple } from "../../utils/type";
import Icon from "../Icon";
import "./Tag.scss";

const TagColors = tuple("default", "blue", "green", "orange", "purple");
type TagColor = typeof TagColors[number];

const TagTypes = tuple("default", "two-tone");
type TagType = typeof TagTypes[number];

interface ITagProps {
  color?: TagColor;
  type?: TagType;
  children: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
}

const Tag = ({
  color = "default",
  type = "default",
  children,
  closable = false,
  onClose,
}: ITagProps) => {
  let typeName = type === "default" ? "" : "tag--" + type;
  let closableName = closable ? "tag--closable" : "";
  let classNames = joinClassnames([
    "tag",
    "tag--" + color,
    typeName,
    closableName,
  ]);
  return (
    <span className={classNames}>
      {children}
      {closable && (
        <Icon
          icon={X}
          size={14}
          onClick={onClose}
          style={{ cursor: "pointer" }}
        />
      )}
    </span>
  );
};

export default Tag;

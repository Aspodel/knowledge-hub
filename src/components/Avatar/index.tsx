import React from "react";
import "./styles.scss";
import { tuple, tupleNum } from "../../utils/type";

const UserStatusTypes = tuple("online", "offline");
type UserStatusType = typeof UserStatusTypes[number];

interface IAvatarProps {
  status?: UserStatusType;
  imgSrc: string;
  size?: number;
}

const Avatar = ({ status, imgSrc, size }: IAvatarProps) => {
  return (
    <div className="avatar" style={{ height: size, width: size }}>
      <img src={imgSrc} alt="avatar" />
      
    </div>
  );
};

export default Avatar;

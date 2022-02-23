import React from "react";
import "./Avatar.scss";
import { tuple } from "../../utils/type";

const UserStatusTypes = tuple("online", "offline");
type UserStatusType = typeof UserStatusTypes[number];

interface IAvatarProps {
  status?: UserStatusType;
  imgSrc: string;
}

const Avatar = ({ status, imgSrc }: IAvatarProps) => {
  return (
    <div className="avatar">
      <img src={imgSrc} alt="avatar" />
    </div>
  );
};

export default Avatar;

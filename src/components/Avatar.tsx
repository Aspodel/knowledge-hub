import React from "react";

const Avatar = ({ imageSource }: { imageSource: string }) => {
  return (
    <div className="avatar">
      <img src={imageSource} alt="avatar" />
    </div>
  );
};

export default Avatar;

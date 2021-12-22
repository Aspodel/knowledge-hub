import React from "react";
import { Iconly } from "react-iconly";
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import { DEFAULT_PROFFILE_IMG_URL } from "../utils/constans";

function Headerbar() {
  return (
    <div className="header-bar">
      <div className="header-bar__left">
        <input type="search" placeholder="Search " />
      </div>

      <div className="header-bar__right">
        <Link to="create">
          <Button>Create</Button>
        </Link>
        <Link to="chat">
          <Iconly name="Chat" />
        </Link>
        <Link to="notification">
          <Iconly name="Notification" />
        </Link>
        <Link to="user-profile">
          <Avatar imageSource={DEFAULT_PROFFILE_IMG_URL} />
        </Link>
      </div>
    </div>
  );
}

export default Headerbar;

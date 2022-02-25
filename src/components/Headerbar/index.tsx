import React from "react";
import "./HeaderBar.scss";
import { Iconly } from "react-iconly";
import { Link } from "react-router-dom";
import Avatar from "../Avatar";
import Button from "../Button";
import { DEFAULT_PROFFILE_IMG_URL } from "../../utils/constants";

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
        <Link to="/">
          <Iconly name="Chat" />
        </Link>
        <Link to="/">
          <Iconly name="Notification" />
        </Link>
        <Link to="/">
          <Avatar imgSrc={DEFAULT_PROFFILE_IMG_URL} />
        </Link>
      </div>
    </div>
  );
}

export default Headerbar;

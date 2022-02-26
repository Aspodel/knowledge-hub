import React from "react";
import "./HeaderBar.scss";
import { Link } from "react-router-dom";
import Avatar from "../Avatar";
import Button from "../Button";
import { DEFAULT_PROFFILE_IMG_URL } from "../../utils/constants";
import Icon from "../Icon";
import { Bell, ChatAlt } from "@styled-icons/heroicons-outline";

function Headerbar() {
  return (
    <div className="header-bar">
      <div className="search">
        <input type="search" placeholder="Type to search" />
      </div>

      <div className="control">
        <Link to="/">
          <Button>Create</Button>
        </Link>
        <Link to="/">
          <Icon icon={ChatAlt} size={34} />
        </Link>
        <Link to="/">
          <Icon icon={Bell} size={34} />
        </Link>
        <Link to="/">
          <Avatar imgSrc={DEFAULT_PROFFILE_IMG_URL} />
        </Link>
      </div>
    </div>
  );
}

export default Headerbar;

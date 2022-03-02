import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles.scss";
import Avatar from "../Avatar";
import { DEFAULT_PROFFILE_IMG_URL } from "../../utils/constants";
import Icon from "../Icon";
import { Home, DocumentText } from "@styled-icons/heroicons-outline";
import {
  Home as HomeSolid,
  DocumentText as DocumentTextSolid,
} from "@styled-icons/heroicons-solid";

function Sidebar() {
  // const [toggleSidebar, setToggleSidebar] = useToggle(true);

  return (
    <div className="sidebar">
      <Link className="logo" to="/">
        <Avatar imgSrc={DEFAULT_PROFFILE_IMG_URL} />
      </Link>

      <div className="sidebar__menu">
        <NavLink
          to="/"
          className={({ isActive }) =>
            "sidebar__item" + (isActive ? " sidebar__item--active" : "")
          }
          children={({ isActive }) => (
            <>
              <Icon icon={isActive ? HomeSolid : Home} size={26} />
              Hello
              <div className="test">Test</div>
            </>
          )}
        />

        <NavLink
          to="/new-blog"
          className={({ isActive }) =>
            "sidebar__item" + (isActive ? " sidebar__item--active" : "")
          }
          children={({ isActive }) => (
            <>
              <Icon
                icon={isActive ? DocumentTextSolid : DocumentText}
                size={26}
              />
              New Blog
            </>
          )}
        />
      </div>
    </div>
  );
}

export default Sidebar;

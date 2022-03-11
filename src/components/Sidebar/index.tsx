import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles.scss";
import Avatar from "../Avatar";
import { DEFAULT_PROFFILE_IMG_URL } from "../../utils/constants";
import Icon from "../Icon";
import { Home, DocumentText, Newspaper } from "@styled-icons/heroicons-outline";

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
        >
          <Icon icon={Home} size={26} />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/new-blog"
          className={({ isActive }) =>
            "sidebar__item" + (isActive ? " sidebar__item--active" : "")
          }
        >
          <Icon icon={DocumentText} size={26} />
          <span>New Blog</span>
        </NavLink>

        <NavLink
          to="/detail"
          className={({ isActive }) =>
            "sidebar__item" + (isActive ? " sidebar__item--active" : "")
          }
        >
          <Icon icon={Newspaper} size={26} />
          <span>Detail</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;

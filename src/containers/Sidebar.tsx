import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Avatar from "../components/Avatar";
// import NavLink from "../components/Sidebar/NavLink";
import useToggle from "../hooks/useToggle";
import { DEFAULT_PROFFILE_IMG_URL } from "../utils/constants";

function Sidebar() {
  const [toggleSidebar, setToggleSidebar] = useToggle(true);

  return (
    <div className={toggleSidebar ? "sidebar -active" : "sidebar"}>
      <div className="logo">
        <div>
          <Avatar imgSrc={DEFAULT_PROFFILE_IMG_URL} />
        </div>
      </div>

      <div className="sidebar__nav">
        <div className="item__heading">Menu</div>
        {/* <NavLink to="/" iconName="Home">
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/in" iconName="TwoUsers">
          <span>Users</span>
        </NavLink>
        <NavLink to="on" iconName="Paper">
          <span>Blogs</span>
        </NavLink> */}

        <Link to="/">Home</Link>
        <br />
        <Link to="/new-blog">New Blog</Link>
      </div>

      <div className="sidebar__messages" onClick={setToggleSidebar}>
        <div className="item__heading">Messages</div>
      </div>
    </div>
  );
}

export default Sidebar;

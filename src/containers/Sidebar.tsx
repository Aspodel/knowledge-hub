import React from "react";
import { Route, Routes } from "react-router-dom";
import Avatar from "../components/Avatar";
import NavLink from "../components/Sidebar/NavLink";
import useToggle from "../hooks/useToggle";
import { DEFAULT_PROFFILE_IMG_URL } from "../utils/constans";

function Sidebar() {
  const [toggleSidebar, setToggleSidebar] = useToggle(true);

  return (
    <div className={toggleSidebar ? "page__sidebar -active" : "sidebar"}>
      <div className="logo">
        <div>
          <Avatar imageSource={DEFAULT_PROFFILE_IMG_URL} />
        </div>
      </div>

      <div className="sidebar__nav">
        <div className="item__heading">Menu</div>
        <NavLink to="/" iconName="Home">
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/in" iconName="TwoUsers">
          <span>Users</span>
        </NavLink>
        <NavLink to="on" iconName="Paper">
          <span>Blogs</span>
        </NavLink>
      </div>

      <div className="sidebar__messages" onClick={setToggleSidebar}>
        <div className="item__heading">Messages</div>
      </div>

      <Routes>
        <Route path="/in" element={<></>} />
      </Routes>
    </div>
  );
}

export default Sidebar;

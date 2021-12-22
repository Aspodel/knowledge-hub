import React from "react";
import { NavLink } from "react-router-dom";

function UserSetting() {
  return (
    <div className="user-setting">
      <div className="user-setting__sidebar">
        <NavLink
          className="user-setting__sidebar__item -active"
          to="#profile-information"
        >
          Basics
        </NavLink>
        <NavLink className="user-setting__sidebar__item" to="account">
          Account
        </NavLink>
        <NavLink className="user-setting__sidebar__item" to="notification">
          Notifications
        </NavLink>
      </div>
      <div className="user-setting__main">
        <div className="header-box" id="profile-information">
          <div className="header-box__bullet"></div>
          <div className="header-box__content">Profile information</div>
        </div>
      </div>
    </div>
  );
}

export default UserSetting;

import React from "react";
import { Outlet } from "react-router-dom";
import Headerbar from "../components/Headerbar";

const Layout = () => {
  return (
    <div className="layout">
      <Headerbar />
      <Outlet />
    </div>
  );
};

export default Layout;

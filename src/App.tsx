import React from "react";
import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./containers/Sidebar";
import Headerbar from "./containers/Headerbar";
// import UserSetting from "./containers/UserSetting";
import ManageBlog from "./containers/ManageBlog";
import NewBlog from "./containers/NewBlog";
// import Modal from "./components/Modal";
// import Banner from "./components/Banner";

function App() {
  return (
    <div className="app">
      <div className="page">
        <Sidebar />
        <div className="page__container relative">
          <Headerbar />
          <ManageBlog />  
          <NewBlog />
        </div>
      </div>

      <Routes>
        <Route index element={<></>} />
        <Route path="in" element={<></>} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;

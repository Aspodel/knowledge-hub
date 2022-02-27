import React from "react";
import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ManageBlog from "./containers/ManageBlog";
import NewBlog from "./containers/NewBlog";
import Layout from "./containers/Layout";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ManageBlog />} />
          <Route path="new-blog" element={<NewBlog />} />
        </Route>
        <Route path="*" element={<div>This url not found</div>} />
      </Routes>
    </div>
  );
}

export default App;

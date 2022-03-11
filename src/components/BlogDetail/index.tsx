import React from "react";
import { Data } from "./data";
import { createReactEditorJS } from "react-editor-js";
import { Tools } from "../Editor/toolConfig";
import Editor from "../Editor";

const BlogDetail = () => {
  const ReactEditorJS = createReactEditorJS();

  return (
    <div className="blog-detail">
      Blog Detail <br />
      <br />
      <br />
      {/* <ReactEditorJS defaultValue={Data} tools={Tools} /> */}
      <Editor data={Data} /* readOnly */ />
    </div>
  );
};

export default BlogDetail;

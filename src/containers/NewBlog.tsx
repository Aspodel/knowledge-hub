import React from "react";
import { Iconly } from "react-iconly";
import Panel from "../components/Panel";
import HeaderBox from "../components/Heading";
import Tag from "../components/Tag";
import Tooltip from "../components/Tooltip";
import { DEFAULT_PROFFILE_IMG_URL } from "../utils/constans";
import { Color } from "../utils/enum";

const NewBlog = () => {
  return (
    <div className="page-layout new-blog">
      <div className="page-layout__header">New Blog</div>
      <div className="page-layout__main">
        <div className="page-layout__main__left">
          <div className="container">
            <HeaderBox>Title & description</HeaderBox>
            <div className="container__label h6">
              Blog title
              <Tooltip content="Title should be between 10 and 120 characters">
                <Iconly
                  size={14}
                  name="InfoCircle"
                  set="bold"
                  primaryColor="#6f767e"
                />
              </Tooltip>
            </div>
            <input type="text" />
            <div className="container__label h6">
              Description
              <Tooltip content="Write your description for your blog">
                <Iconly
                  size={14}
                  name="InfoCircle"
                  set="bold"
                  primaryColor="#6f767e"
                />
              </Tooltip>
            </div>
            <div contentEditable className="textarea" />
          </div>

          <div className="container">
            <HeaderBox bulletColor={Color.Blue}>Image & author</HeaderBox>
            <div className="container__label h6">
              Image cover
              <Tooltip content="Should be upload png or jpg">
                <Iconly
                  size={14}
                  name="InfoCircle"
                  set="bold"
                  primaryColor="#6f767e"
                />
              </Tooltip>
            </div>
            <div className="container__upload-image">
              <label className="custom-file-upload flex align-center">
                <input type="file" accept="image/*" />
                <Iconly name="Upload" />
                <span className="h6">Click or drop image</span>
              </label>
            </div>

            <div className="container__label h6">
              Author
              <Tooltip content="Select authors of blog">
                <Iconly
                  size={14}
                  name="InfoCircle"
                  set="bold"
                  primaryColor="#6f767e"
                />
              </Tooltip>
            </div>

            <input type="text" />

            <div className="container__authors">
              <Tooltip content="Aspodel Tran" position="bottom">
                <div className="author">
                  <img src={DEFAULT_PROFFILE_IMG_URL} alt="" />
                  <span className="close-symbol" />
                </div>
              </Tooltip>
              <Tooltip content="Cris" position="bottom">
                <div className="author">
                  <img src="https://i.imgur.com/FVZECCL.jpg" alt="" />
                  <span className="close-symbol" />
                </div>
              </Tooltip>
            </div>
          </div>

          <div className="container">
            <HeaderBox bulletColor={Color.Purple}>Category & tag</HeaderBox>
            <div className="container__label h6">
              Categories
              <Tooltip content="Select categories">
                <Iconly
                  size={14}
                  name="InfoCircle"
                  set="bold"
                  primaryColor="#6f767e"
                />
              </Tooltip>
            </div>

            <input type="text" placeholder="Search" />

            <div className="container__list"></div>

            <div className="container__label h6">
              Tags
              <Tooltip content="Select tags">
                <Iconly
                  size={14}
                  name="InfoCircle"
                  set="bold"
                  primaryColor="#6f767e"
                />
              </Tooltip>
            </div>

            <input type="text" />

            <div className="container__list">
              <Tag closable>React</Tag>
              <Tag closable>.Net</Tag>
              <Tag>Web</Tag>
            </div>
          </div>
        </div>

        <div className="page-layout__main__right">
          <div className="container">
            <div className="container__headerbar flex-between align-center">
              <HeaderBox bulletColor={Color.Blue}>Preview</HeaderBox>
              <span className="expand-symbol" />
            </div>
            <img src={DEFAULT_PROFFILE_IMG_URL} alt="" />
          </div>
        </div>
      </div>
      {/* <Panel>Chill</{Panel}> */}
    </div>
  );
};

export default NewBlog;

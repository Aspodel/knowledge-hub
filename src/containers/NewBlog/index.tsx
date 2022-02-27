import React from "react";
import "./styles.scss";
import Panel from "../../components/Panel";
import HeaderBox from "../../components/Heading";
import Tag from "../../components/Tag";
import Tooltip from "../../components/Tooltip";
import { DEFAULT_PROFFILE_IMG_URL } from "../../utils/constants";
import { Color } from "../../utils/enum";
import { ExclamationCircle } from "@styled-icons/heroicons-solid";
import Icon from "../../components/Icon";
import { Download } from "@styled-icons/heroicons-outline";

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
                <Icon
                  icon={ExclamationCircle}
                  size={16}
                  className="icon-exclamation"
                />
              </Tooltip>
            </div>
            <input type="text" />

            <div className="container__label h6">
              Author
              <Tooltip content="Should be under 5 authors">
                <Icon
                  icon={ExclamationCircle}
                  size={16}
                  className="icon-exclamation"
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

            <div className="container__label h6">
              Description
              <Tooltip content="Write your description for your blog">
                <Icon
                  icon={ExclamationCircle}
                  size={16}
                  className="icon-exclamation"
                />
              </Tooltip>
            </div>
            <div contentEditable className="textarea" />
          </div>

          <div className="container">
            <HeaderBox bulletColor={Color.Blue}>Image</HeaderBox>
            <div className="container__label h6">
              Image cover
              <Tooltip content="Should be upload png or jpg">
                <Icon
                  icon={ExclamationCircle}
                  size={16}
                  className="icon-exclamation"
                />
              </Tooltip>
            </div>
            <div className="container__upload-image">
              <label className="custom-file-upload flex align-center">
                <input type="file" accept="image/*" />
                <Icon icon={Download} />
                <span className="h6">Click or drop image</span>
              </label>
            </div>
          </div>

          <div className="container">
            <HeaderBox bulletColor={Color.Purple}>Category & tag</HeaderBox>
            <div className="container__label h6">
              Categories
              <Tooltip content="Should be between 1 and 4 category">
                <Icon
                  icon={ExclamationCircle}
                  size={16}
                  className="icon-exclamation"
                />
              </Tooltip>
            </div>

            <input type="text" placeholder="Search" />

            <div className="container__list"></div>

            <div className="container__label h6">
              Tags
              <Tooltip content="Should be between 1 and 10 tags">
                <Icon
                  icon={ExclamationCircle}
                  size={16}
                  className="icon-exclamation"
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

import React from "react";
import { Iconly } from "react-iconly";
import { IBlog } from "../../interfaces";
import Button from "../Button";
import Checkbox from "../Checkbox";

interface ViewModeProps {
  data?: IBlog[];
  isGridMode: boolean;
  showPreviewMode: any;
  handleCheckboxChange: any;
  handleCheckAllChange: any;
  checkedList: number[];
}

const ViewMode = ({
  data,
  isGridMode,
  showPreviewMode,
  handleCheckboxChange,
  handleCheckAllChange,
  checkedList,
}: ViewModeProps) => {
  let viewmodeClassName = `view-mode -${isGridMode ? "grid" : "list"}`;

  const viewmodeItemClassName = (id: number): string =>
    checkedList.find((element) => element === id)
      ? "view-mode__item -active"
      : "view-mode__item";

  //Don't need if checkedList don't have initial value
  // const checkboxValue = (id: number): boolean => checkedList.includes(id);

  const renderListModeHeader = () => (
    <div className="view-mode__item -header">
      <span className="row__checkbox">
        <Checkbox
          id="select-all"
          variant="square"
          onChange={handleCheckAllChange}
          checkAll={{ optionsValue: [1, 2], checkedValue: checkedList }}
        />
      </span>
      <span className="view-mode__item__image">Title</span>
      <span className="view-mode__item__title"></span>
      <span className="view-mode__item__status">Status</span>
      <span className="view-mode__item__time">Created At</span>
      <span className="view-mode__item__authors">Authors</span>
      <span className="view-mode__item__toolbox "></span>
    </div>
  );

  return (
    <div className={viewmodeClassName}>
      {isGridMode ? null : renderListModeHeader()}

      <label className={viewmodeItemClassName(1)}>
        <span className="view-mode__item__checkbox">
          <Checkbox
            id="1"
            onChange={handleCheckboxChange}
            checked={checkedList?.includes(1)}
          />
        </span>
        <span className="view-mode__item__image flex">
          <img src="https://i.imgur.com/ch75rMZ.jpg" alt="alt" />
        </span>
        <span className="view-mode__item__title">
          <span>Blog title: First blog of aspodel tran</span>
        </span>
        <span className="view-mode__item__status">
          <span className="tag">Published</span>
        </span>
        <span className="view-mode__item__time">
          {isGridMode && <Iconly name="TimeCircle" size={20} />}
          <time>Mar 1, 2021 at 1:03 AM</time>
        </span>
        <span className="view-mode__item__authors">
          <div className="author">
            <img src="https://i.imgur.com/ch75rMZ.jpg" alt="alt" />
          </div>
          <div className="author">
            <img src="https://i.imgur.com/FVZECCL.jpg" alt="alt" />
          </div>
        </span>
        <span className="view-mode__item__toolbox flex-center">
          <Button variant="text" onClick={() => showPreviewMode()}>
            <Iconly name="Show" />
          </Button>
          <Button variant="text">
            <Iconly name="Delete" />
          </Button>
          <Button variant="text">
            <span className="tick-symbol" />
          </Button>
        </span>
      </label>

      <label className={viewmodeItemClassName(2)}>
        <span className="view-mode__item__checkbox">
          <Checkbox
            id="2"
            onChange={handleCheckboxChange}
            checked={checkedList?.includes(2)}
          />
        </span>
        <span className="view-mode__item__image flex">
          <img src="https://i.imgur.com/FVZECCL.jpg" alt="" />
        </span>
        <span className="view-mode__item__title">
          <span>Blog title: First blog of aspodel tran</span>
        </span>
        <span className="view-mode__item__status">
          <span className="tag">Published</span>
        </span>
        <span className="view-mode__item__time">
          {isGridMode && <Iconly name="TimeCircle" size={20} />}
          <time>Mar 1, 2021 at 1:03 AM</time>
        </span>
        <span className="view-mode__item__authors">
          <div className="author">
            <img src="https://i.imgur.com/ch75rMZ.jpg" alt="alt" />
          </div>
          <div className="author">
            <img src="https://i.imgur.com/FVZECCL.jpg" alt="alt" />
          </div>
        </span>
        <span className="view-mode__item__toolbox flex-center">
          <Button variant="text" onClick={() => showPreviewMode()}>
            <Iconly name="Show" />
          </Button>
          <Button variant="text">
            <Iconly name="Delete" />
          </Button>
          <Button variant="text">
            <span className="tick-symbol" />
          </Button>
        </span>
      </label>
    </div>
  );
};

export default ViewMode;

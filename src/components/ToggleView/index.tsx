import React from "react";
import "./ToggleView.scss";
import Button from "../Button";
import { MenuAlt4, ViewGrid } from "@styled-icons/heroicons-outline";
import Icon from "../Icon";

type ToggleViewProps = {
  isGridView: boolean;
  setGridView: any;
};

const ToggleView = ({ isGridView, setGridView }: ToggleViewProps) => {
  return (
    <div className="toggle-view flex">
      <Button
        variant="text"
        className={isGridView ? "" : "-active"}
        onClick={() => setGridView(false)}
      >
        <Icon icon={MenuAlt4} size={30} />
      </Button>
      <Button
        variant="text"
        className={isGridView ? "-active" : ""}
        onClick={() => setGridView(true)}
      >
        <Icon icon={ViewGrid} size={30} />
      </Button>
    </div>
  );
};

export default React.memo(ToggleView);

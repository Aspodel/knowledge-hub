import React from "react";
import "./ToggleView.scss";
import { Iconly } from "react-iconly";
import Button from "../Button";

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
        <Iconly name="Filter" />
      </Button>
      <Button
        variant="text"
        className={isGridView ? "-active" : ""}
        onClick={() => setGridView(true)}
      >
        <Iconly name="Category" />
      </Button>
    </div>
  );
};

export default React.memo(ToggleView);

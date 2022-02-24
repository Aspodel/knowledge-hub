import React from "react";
import "./Panel.scss";
import Button, { IButtonProps } from "../Button";

type BannerProps = {
  className?: string;
  children?: React.ReactNode;
  buttons?: IButtonProps[];
};

const Banner = ({ className = "", children, buttons }: BannerProps) => {
  return (
    <div
      className={`panel ${className} ${
        children ? "" : "hidden"
      } flex-between align-center`}
    >
      <div className="panel-left">{children}</div>
      <div className="panel-right">
        {buttons?.map((button) => {
          console.log(button);
          return (
            <React.Fragment key={Math.random()}>
              <Button
                onClick={button.onClick}
                variant={button.variant}
                className={button.className}
                disable={button.disable}
              >
                {button.children}
              </Button>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(Banner);

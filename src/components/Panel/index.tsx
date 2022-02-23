import React from "react";
import Button, { IButtonProps } from "../Button";

type BannerProps = {
  className?: string;
  children?: React.ReactNode;
  buttons?: IButtonProps[];
};

const Banner = ({ className = "", children, buttons }: BannerProps) => {
  return (
    <div
      className={`banner ${className} ${
        children ? "" : "hidden"
      } flex-between align-center`}
    >
      <div className="banner-left">{children}</div>
      <div className="banner-right">
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

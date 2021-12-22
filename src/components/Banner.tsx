import React from "react";
import Button, { IButton } from "./Button";

type BannerProps = {
  active?: boolean;
  className?: string;
  children?: React.ReactNode;
  buttons?: IButton[];
};

const Banner = ({
  active = false,
  className = "",
  children,
  buttons,
}: BannerProps) => {
  return (
    <div
      className={`banner ${className} ${
        active ? "" : "hidden"
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

import React from "react";
import "./Modal.scss";
import Button, { IButtonProps } from "../Button";
import Heading from "../Heading";
import Icon from "../Icon";
import { X } from "@styled-icons/heroicons-outline";

type ModalProps = {
  isShow: boolean;
  setShow: any;
  title: string;
  className?: string;
  children?: React.ReactNode;
  footerButtons?: IButtonProps[];
};

const Modal = ({
  isShow,
  setShow,
  title,
  className = "",
  children,
  footerButtons,
}: ModalProps) => {
  if (!isShow) return null;

  // console.log(footerButtons);

  return (
    <div className="modal-overlay">
      <div className={`modal ${className}`}>
        <div className="modal__header flex-between align-center">
          <Heading>{title}</Heading>
          <Button onClick={() => setShow(false)} variant="text">
            <Icon icon={X} size={20} />
          </Button>
        </div>
        <div className="modal__main">{children}</div>
        <div className="modal__footer">
          {footerButtons?.map((button) => {
            // console.log(button);
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
    </div>
  );
};

// export default React.memo(Modal);
export default Modal;

import React from "react";
import Modal from "../Modal";

type PreviewBlogModalProps = {
  isShow: boolean;
  setShow: any;
  children?: React.ReactNode;
};

const PreviewBlogModal = ({
  isShow,
  setShow,
  children,
}: PreviewBlogModalProps) => {
  return (
    <>
      <Modal
        isShow={isShow}
        setShow={setShow}
        title="Preview Mode"
        className="Preview-blog-modal"
        footerButtons={[{ children: "Publish", onClick: () => setShow(false) }]}
      >
        <h2>First blog: This is your first blog</h2>
        {children}
      </Modal>
    </>
  );
};

export default React.memo(PreviewBlogModal);

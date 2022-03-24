import React from "react";
import { Data } from "../../components/BlogDetail/data";
import Editor from "../../components/Editor";
import Modal from "../../components/Modal";

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
        <Editor defaultData={Data} readOnly />
      </Modal>
    </>
  );
};

export default React.memo(PreviewBlogModal);

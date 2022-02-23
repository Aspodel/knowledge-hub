import React, { useState } from "react";
import Banner from "../components/Panel";
// import Editor from "../components/Editor";
import HeaderBox from "../components/Heading";
import PreviewBlogModal from "../components/ManageBlog/PreviewBlogModal";
// import TestNha from "../components/ManageBlog/TestNha";
import ViewMode from "../components/ManageBlog/ViewMode";
import ToggleView from "../components/ToggleView";
import useToggle from "../hooks/useToggle";
import { IBlog } from "../interfaces";
function ManageBlog() {
  const [isGridView, setGridView] = useToggle(false);
  const [PreviewModal, setPreviewModal] = useToggle(false);
  const [previewBlog, setPreviewBlog] = useState<IBlog>();
  const [checkedList, setCheckedList] = useState<number[]>([]);

  // const [value, setValue] = useState();

  //Set blog data to preview and turn on Preview Modal
  const showPreviewMode = (blog: IBlog): void => {
    console.log(blog);
    setPreviewBlog(blog);
    setPreviewModal(true);
  };

  //Add id of checkbox to checked list
  const handleCheckoxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const checked = e.target.checked;
    let id = Number(e.target.id);
    let newCheckedList = [...checkedList];

    if (checked) {
      newCheckedList.push(id);
      setCheckedList(newCheckedList);
    } else {
      setCheckedList(newCheckedList.filter((item) => item !== id));
    }
  };

  const handleCheckAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setCheckedList(e.target.checked ? plainOptions : []);
    const checked = e.target.checked;
    console.log("check all");
    if (checked) {
      // let result = blogsList.map(({ id }) => id);

      setCheckedList([1, 2]);
    } else {
      //clear item in Checked list
      setCheckedList([]);
    }
  };

  // useEffect(() => {
  //   console.log("testing");
  //   let array = JSON.stringify(value);
  //   console.log(array);
  //   console.log(typeof value);
  //   console.log(typeof array);
  // }, [value]);

  return (
    <div className="page-layout">
      <div className="page-layout__header">Blogs</div>
      <div className="page-layout__main manage-blog">
        <div className="manage-blog__line flex-between align-center">
          <div className="flex">
            <HeaderBox>Queue</HeaderBox>
            <input
              type="search"
              name="Search"
              id=""
              placeholder="Search blog"
            />
          </div>
          <ToggleView isGridView={isGridView} setGridView={setGridView} />
        </div>

        <ViewMode
          isGridMode={isGridView}
          showPreviewMode={showPreviewMode}
          handleCheckboxChange={handleCheckoxChange}
          handleCheckAllChange={handleCheckAllChange}
          checkedList={checkedList}
        />

        {/* <TestNha hehe={"1"} yeah={"1"} /> */}

        {/* <Editor id="custom" value={value} setValue={setValue} /> */}
      </div>
      <PreviewBlogModal
        isShow={PreviewModal}
        setShow={setPreviewModal}
        children={previewBlog}
      />

      <Banner buttons={[{ children: "Publish" }]}>
        {checkedList.length
          ? `${checkedList.length} ${
              checkedList.length > 1 ? "items" : "item"
            } selected`
          : null}
      </Banner>
    </div>
  );
}

export default ManageBlog;

import React, { useState } from "react";
import Banner from "../components/Banner";
// import Editor from "../components/Editor";
import HeaderBox from "../components/HeaderBox";
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

  // Remove this function
  // const checkActiveClass = (id: number) => {
  //   if (checkedList) {
  //     if (checkedList.find((element) => element === id)) {
  //       return true;
  //     }
  //   }
  //   return false;
  // };

  // Check if all item in list checked, then set Check ALl true
  // useEffect(() => {
  //   // check BlogList include all item in CheckedList
  //   let isCheckAll = [1, 2].every(
  //     (element) => checkedList.indexOf(element) > -1
  //   );
  //   // console.log(isCheckAll);
  //   setCheckAll(isCheckAll);
  // }, [checkedList]);

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
    // setCheckAll(e.target.checked);
  };

  // let array = JSON.stringify(A);
  // console.log(array);
  // console.log(typeof A);
  // console.log(typeof array);

  // useEffect(() => {
  //   console.log("testing");
  //   let array = JSON.stringify(value);
  //   console.log(array);
  //   console.log(typeof value);
  //   console.log(typeof array);
  // }, [value]);

  return (
    <div className="manage-blog full-dimension">
      <div className="manage-blog__line flex-between align-center">
        <div className="flex">
          <HeaderBox>Queue</HeaderBox>
          <input type="search" name="Search" id="" placeholder="Search blog" />
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

      <PreviewBlogModal
        isShow={PreviewModal}
        setShow={setPreviewModal}
        children={previewBlog}
      />

      <Banner
        buttons={[{ children: "Publish" }]}
        active={checkedList.length ? true : false}
      >
        {checkedList.length ? `${checkedList.length} item selected` : null}
      </Banner>
    </div>
  );
}

export default ManageBlog;

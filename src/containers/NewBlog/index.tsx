import React from "react";
import "./styles.scss";
// import Panel from "../../components/Panel";
import HeaderBox from "../../components/Heading";
import Tag from "../../components/Tag";
import Tooltip from "../../components/Tooltip";
import { DEFAULT_PROFFILE_IMG_URL } from "../../utils/constants";
import { Color } from "../../utils/enum";
import { ExclamationCircle } from "@styled-icons/heroicons-solid";
import Icon from "../../components/Icon";
import { Download } from "@styled-icons/heroicons-outline";
import { useForm } from "react-hook-form";
import { IBlog } from "../../interfaces";
import { convertToSlug } from "../../utils/helpers";
import { blogService } from "../../services/blogService";
import { Data } from "../../components/BlogDetail/data";
import { userService } from "../../services/userService";
import Select from "../../components/Select";

const NewBlog = () => {
  const { get, create: createBlog } = blogService();
  const { get: getUsers } = userService();

  const {
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IBlog>();

  React.useEffect(() => {
    const getUsersData = async () => {
      const result = await getUsers();
      console.log(result);
    };

    getUsersData();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    setValue("slug", convertToSlug(data.title));
    console.log(data);

    let result = await get();
    console.log(result);
    setValue("authors", ["5F230FE1-8573-4769-91A2-E011BF05FB8C"]);
    setValue("content", JSON.stringify(Data));
    await createBlog(data);
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let dataName: "authors" | "categories" = name as "authors" | "categories";
    setValue(dataName, [e.target.value]);
  };

  const testSubmit = (data: any) => {
    // alert(JSON.stringify(data));
    // console.log(watch("example"));
  };

  return (
    <div className="page__inner">
      <div className="page__container new-blog">
        <div className="page__title h3">New Blog</div>

        <div className="page-layout__main">
          <form
            className="page-layout__main__left"
            onSubmit={handleSubmit(testSubmit)}
          >
            <button type="submit" /* onSubmit={onSubmit} */>Submit</button>
            <div className="container">
              <HeaderBox>Title & description</HeaderBox>

              <div className="container__label h6">
                Blog title
                <Tooltip content="Title should be between 10 and 120 characters">
                  <Icon
                    icon={ExclamationCircle}
                    size={16}
                    className="icon-exclamation"
                  />
                </Tooltip>
              </div>
              <input type="text" {...register("title")} />

              <div className="container__label h6">
                Author
                <Tooltip content="Should be under 5 authors">
                  <Icon
                    icon={ExclamationCircle}
                    size={16}
                    className="icon-exclamation"
                  />
                </Tooltip>
              </div>

              {/* <input
                type="text"
                list="author-list"
                {...register("authors")} 
                onChange={handleChange}
                name="authors"
              />
              <datalist id="author-list">
                <option>Volvo</option>
                <option>Saab</option>
                <option>Mercedes</option>
                <option>Audi</option>
              </datalist> */}

              <Select
                datalist={["rainbow", "rain", "sun", "night", "cloud"]}
                name="test"
                register={register}
                setValue={setValue}
              />

              <div className="container__authors">
                <Tooltip content="Aspodel Tran" position="bottom">
                  <div className="author">
                    <img src={DEFAULT_PROFFILE_IMG_URL} alt="" />
                    <span className="close-symbol" />
                  </div>
                </Tooltip>
                <Tooltip content="Cris" position="bottom">
                  <div className="author">
                    <img src="https://i.imgur.com/FVZECCL.jpg" alt="" />
                    <span className="close-symbol" />
                  </div>
                </Tooltip>
              </div>

              <div className="container__label h6">
                Description
                <Tooltip content="Write your description for your blog">
                  <Icon
                    icon={ExclamationCircle}
                    size={16}
                    className="icon-exclamation"
                  />
                </Tooltip>
              </div>
              {/* <textarea className="textarea" {...register("description")} /> */}
            </div>

            <div className="container">
              <HeaderBox bulletColor={Color.Blue}>Image</HeaderBox>
              <div className="container__label h6">
                Image cover
                <Tooltip content="Should be upload png or jpg">
                  <Icon
                    icon={ExclamationCircle}
                    size={16}
                    className="icon-exclamation"
                  />
                </Tooltip>
              </div>
              <div className="container__upload-image">
                <label className="custom-file-upload flex align-center">
                  <input type="file" accept="image/*" />
                  <Icon icon={Download} />
                  <span className="h6">Click or drop image</span>
                </label>
              </div>
            </div>

            <div className="container">
              <HeaderBox bulletColor={Color.Purple}>Category & tag</HeaderBox>
              <div className="container__label h6">
                Categories
                <Tooltip content="Should be between 1 and 4 category">
                  <Icon
                    icon={ExclamationCircle}
                    size={16}
                    className="icon-exclamation"
                  />
                </Tooltip>
              </div>

              <input type="text" placeholder="Search" />

              <div className="container__list"></div>

              <div className="container__label h6">
                Tags
                <Tooltip content="Should be between 1 and 10 tags">
                  <Icon
                    icon={ExclamationCircle}
                    size={16}
                    className="icon-exclamation"
                  />
                </Tooltip>
              </div>

              <input type="text" />

              <div className="container__list">
                <Tag closable>React</Tag>
                <Tag closable>.Net</Tag>
                <Tag>Web</Tag>
              </div>
            </div>
          </form>

          <div className="page-layout__main__right">
            <div className="container">
              <div className="container__headerbar flex-between align-center">
                <HeaderBox bulletColor={Color.Blue}>Preview</HeaderBox>
                <span className="expand-symbol" />
              </div>
              <img src={DEFAULT_PROFFILE_IMG_URL} alt="" />
            </div>
          </div>
        </div>
        {/* <Panel>Chill</{Panel}> */}
      </div>
    </div>
  );
};

export default NewBlog;

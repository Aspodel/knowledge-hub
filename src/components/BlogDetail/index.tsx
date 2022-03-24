import React, { useEffect } from "react";
import "./styles.scss";
import { Data } from "./data";
import Editor from "../Editor";
import { blogService } from "../../services/blogService";
import { useForm } from "react-hook-form";
import { IUser } from "../../interfaces";
import Select from "../Select";

const BlogDetail = () => {
  // const [value, setValue] = React.useState<any>();
  const { get: getBlog } = blogService();
  const { register, handleSubmit, watch, setValue } = useForm();

  // const onSubmit = (data: any) => {
  //   // alert(JSON.stringify(data));
  //   console.log(watch("example"));
  //   console.log(watch("test"));
  // };

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  // useEffect(() => {
  //   const get = async () => {
  //     const result = await getBlog();
  //     setValue(result);
  //   };

  //   get();
  // }, []);

  // useEffect(() => {
  //   console.log(value);
  // }, [value]);

  // React.useEffect(() => {
  //   console.log(value);
  // }, [value]);

  return (
    <div className="blog-detail">
      Blog Detail
      {/* <br />
      <Editor defaultData={Data} setData={setValue} readOnly /> */}
      <div>
        <br />
        {/* <label className="select" htmlFor="slct">
          <select id="slct" required defaultValue="">
            <option value="" disabled>
              Select option
            </option>
            <option value="#"></option>
            <option value="#">Two</option>
            <option value="#">Three</option>
            <option value="#">Four</option>
            <option value="#">Five</option>
            <option value="#">Six</option>
            <option value="#">Seven</option>
          </select>
          <svg>
            <use xlinkHref="#select-arrow-down"></use>
          </svg>
        </label>
        <svg className="sprites">
          <symbol id="select-arrow-down" viewBox="0 0 10 6">
            <polyline points="1 1 5 5 9 1"></polyline>
          </symbol>
        </svg> */}
      </div>
      <br />
      <form onSubmit={onSubmit}>
        {["rainbow", "rain", "sun", "night", "cloud"].map((c, i) => (
          <label key={c}>
            <input
              type="checkbox"
              value={c}
              // name={"withIndex." + i * 2}
              {...register("example")}
            />
            {c}
          </label>
        ))}

        <button type="submit">Submit</button>
      </form>
      <form onSubmit={onSubmit}>
        <Select
          datalist={["rainbow", "rain", "sun", "night", "cloud"]}
          name="test"
          register={register}
          setValue={setValue}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogDetail;

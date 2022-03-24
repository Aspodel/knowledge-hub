import React, { useEffect } from "react";
import "./styles.scss";
import { Data } from "./data";
import Editor from "../Editor";
import { blogService } from "../../services/blogService";
import { useForm } from "react-hook-form";
import { IUser } from "../../interfaces";

const BlogDetail = () => {
  const [value, setValue] = React.useState<any>();
  const { get: getBlog } = blogService();
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data: any) => {
    // alert(JSON.stringify(data));
    console.log(watch("example"));
  };

  useEffect(() => {
    const get = async () => {
      const result = await getBlog();
      setValue(result);
    };

    get();
  }, []);

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
        <details className="custom-select">
          <summary className="radios">
            {/* <input
              type="radio"
              name="item"
              id="default"
              title="Auswählen..."
              checked
            /> */}
            <input type="radio" name="item" id="item1" title="Item 1" />
            <input type="radio" name="item" id="item2" title="Item 2" />
            <input type="radio" name="item" id="item3" title="Item 3" />
            <input type="radio" name="item" id="item4" title="Item 4" />
            <input type="radio" name="item" id="item5" title="Item 5" />
          </summary>

          <ul className="list">
            <li>
              <label htmlFor="item1">
                {/* <img
                  className="fit-picture"
                  src="https://i.imgur.com/Ob76955.jpeg"
                  alt="Grapefruit slice atop a pile of other slices"
                /> */}
                sss
              </label>
            </li>
            <li>
              <label htmlFor="item2">Item 2</label>
            </li>
            <li>
              <label htmlFor="item3">Item 3</label>
            </li>
            <li>
              <label htmlFor="item4">Item 4</label>
            </li>
            <li>
              <label htmlFor="item5">Item 5</label>
            </li>
          </ul>
        </details>

        <br />
        <br />
        <br />
        <br />
        <br />
        <label className="select" htmlFor="slct">
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
        </svg>
      </div>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
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
    </div>
  );
};

export default BlogDetail;

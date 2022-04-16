import React from "react";
import "./styles.scss";
import { UseFormSetValue } from "react-hook-form";
import useToggle from "../../hooks/useToggle";
import Icon from "../Icon";
import { X } from "@styled-icons/heroicons-outline";
import { DEFAULT_PROFFILE_IMG_URL } from "../../utils/constants";
import { IUser } from "../../interfaces";

interface ISelectProps {
  // defaultValues?: any[];
  // datalist: any[];
  defaultValues?: string[];
  datalist: Array<string | IUser>;
  type?: "multiple" | "single";
  maxTags?: number;
  hideTag?: boolean;
  name: string;
  setValue: UseFormSetValue<any>;
}

const Select = ({
  defaultValues = [],
  datalist,
  type = "multiple",
  maxTags,
  hideTag = false,
  name,
  setValue,
}: ISelectProps) => {
  // const defaultVl = defaultValues.map((item) => {
  //   if (typeof item === "string") {
  //     return item;
  //   } else {
  //     return item.username;
  //   }
  // });  

  const [isShow, setShow] = useToggle(false);
  const [inputValue, setInputValue] = React.useState("");
  const [tags, setTags] = React.useState<string[]>(defaultValues);
  const [isKeyReleased, setIsKeyReleased] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const dataLs: any[] = datalist.map((item) => {
    if (typeof item === "string") {
      return item;
    } else {
      return item.username;
    }
  });

  const filter = dataLs
    .sort()
    .filter(
      (item) =>
        item
          .toString()
          .toLowerCase()
          .indexOf(inputValue.toString().toLowerCase()) > -1
    );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCheckoxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    console.log("running");
    const { checked, value } = e.target;
    console.log(value, checked);
    let newCheckedList = [...tags];

    if (checked) {
      newCheckedList.push(value);
      setTags(newCheckedList);
    } else {
      setTags(newCheckedList.filter((item) => item !== value));
    }
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const trimmedInput = inputValue.trim();

    if (
      key === "Enter" &&
      trimmedInput.length &&
      !tags.map((t) => t.toLowerCase()).includes(trimmedInput.toLowerCase())
    ) {
      e.preventDefault();

      if (dataLs.includes(trimmedInput)) {
        setTags((prev) => [...prev, trimmedInput]);
      } else if (filter.length) {
        for (let i = 0; i < filter.length; i++) {
          if (
            !tags.map((t) => t.toLowerCase()).includes(filter[i].toLowerCase())
          ) {
            setTags((prev) => [...prev, filter[i]]);
            break;
          }
        }
      }

      setInputValue("");
    } else if (key === "Enter") {
      setInputValue("");
    }

    if (
      key === "Backspace" &&
      !inputValue.length &&
      tags.length &&
      isKeyReleased
    ) {
      let tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();

      e.preventDefault();
      setTags(tagsCopy);
      // setInputValue(poppedTag); backspace to edit prev tag
    }

    setIsKeyReleased(false);
  };

  const handleKeyUp = () => {
    setIsKeyReleased(true);
  };

  const search = (data: Array<string | IUser>): any[] => {
    return data.filter(
      (item) =>
        (typeof item === "string" ? item : item.username)
          .toString()
          .toLowerCase()
          .indexOf(inputValue.toString().toLowerCase()) > -1
    );
  };

  React.useEffect(() => {
    console.log(tags);
    setValue(name, tags);
  }, [tags]);

  const deleteTag = (index: number) => {
    setTags((prevState) => prevState.filter((tag, i) => i !== index));
  };

  const handleFocus = () => {
    setShow(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleBlur = (e: React.FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setShow(false);
    }
  };

  const renderOptions = () => {
    const isString = typeof datalist[0] === "string";

    let options = search(datalist)
      .sort(
        isString
          ? undefined
          : (a, b) =>
              a.username > b.username ? 1 : b.username > a.username ? -1 : 0
      )
      .map(
        isString
          ? (item) => (
              <React.Fragment key={item}>
                <input
                  id={item}
                  type="checkbox"
                  value={item}
                  checked={tags.includes(item)}
                  onChange={handleCheckoxChange}
                />
                <label htmlFor={item}>{item}</label>
              </React.Fragment>
            )
          : (item) => (
              <React.Fragment key={item.username}>
                <input
                  id={item.username}
                  type="checkbox"
                  value={item.username}
                  checked={tags.includes(item.username)}
                  onChange={(e) => handleCheckoxChange(e)}
                />
                <label htmlFor={item} className="user-row">
                  <img src={DEFAULT_PROFFILE_IMG_URL} alt="profile" />
                  <div>{item.username}</div>
                </label>
              </React.Fragment>
            )
      );

    return options;
  };

  return (
    <div className="select" onFocus={handleFocus} onBlur={handleBlur}>
      {!hideTag &&
        tags.map((tag, index) => (
          <div className="select__tag" tabIndex={1} key={tag + "-tag"}>
            {tag}
            <button onClick={() => deleteTag(index)}>
              <Icon icon={X} size={12} />
            </button>
          </div>
        ))}
      <input
        className="select__input"
        value={inputValue}
        ref={inputRef}
        onChange={handleInputChange}
        onKeyDown={handleKeydown}
        onKeyUp={handleKeyUp}
      />
      <div
        className="select__dropdown"
        tabIndex={-1}
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{ display: isShow ? "block" : "none" }}
      >
        {/* {typeof datalist[0] === "string" &&
          datalist &&
          search(datalist)
            .sort()
            .map((item) => (
              <div key={item}>
                <input
                  type="checkbox"
                  value={item}
                  checked={tags.includes(item)}
                  onChange={handleCheckoxChange}
                  id={item}
                />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}

        {typeof datalist[0] === "object" &&
          datalist &&
          search(datalist)
            .sort((a, b) =>
              a.username > b.username ? 1 : b.username > a.username ? -1 : 0
            )
            .map((item) => (
              <div key={item.guid}>
                <input
                  type="checkbox"
                  value={item.guid}
                  checked={tags.includes(item)}
                  onChange={handleCheckoxChange}
                  id={item.guid}
                  name="select-option"
                />
                <label htmlFor={item} className="user-row">
                  <img src={DEFAULT_PROFFILE_IMG_URL} alt="profile" />
                  <div>{item.guid}</div>
                  <div>{item.username}</div>
                </label>
              </div>
            ))} */}
        {renderOptions()}
      </div>
    </div>
  );
};

export default Select;

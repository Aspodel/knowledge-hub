import React from "react";
import "./styles.scss";
import {
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormSetValue,
} from "react-hook-form";
import useToggle from "../../hooks/useToggle";
import { IBlog, IUser } from "../../interfaces";
import Icon from "../Icon";
import { X } from "@styled-icons/heroicons-outline";

interface ISelectProps {
  defaultValues?: any[];
  datalist: any[];
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
  const [isShow, setShow] = useToggle(false);
  const [inputValue, setInputValue] = React.useState("");
  const [tags, setTags] = React.useState<any[]>(defaultValues);
  const [isKeyReleased, setIsKeyReleased] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const dataLst: any[] =
    typeof datalist[0] === "string"
      ? datalist
      : datalist.map((d) => d.username);

  const filter = dataLst
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
    const { checked, value } = e.target;
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

      if (dataLst.includes(trimmedInput)) {
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

  const search = (data: any[]): any[] => {
    return data.filter(
      (item) =>
        (typeof item === "string" ? item : item.username)
          .toString()
          .toLowerCase()
          .indexOf(inputValue.toString().toLowerCase()) > -1
    );
  };

  // React.useEffect(() => {
  //   console.log(tags);
  //   setValue(name, tags);
  // }, []);

  const deleteTag = (index: number) => {
    setTags((prevState) => prevState.filter((tag, i) => i !== index));
  };

  return (
    <div
      className="select"
      onFocus={() => {
        setShow(true);
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setShow(false);
        }
      }}
    >
      {tags.map((tag, index) => (
        <div className="select__tag" tabIndex={1}>
          {tag}
          <button onClick={() => deleteTag(index)}>
            <Icon icon={X} size={12} />
          </button>
        </div>
      ))}
      <input
        className="select__input"
        onChange={handleInputChange}
        value={inputValue}
        onKeyDown={handleKeydown}
        onKeyUp={handleKeyUp}
        ref={inputRef}
      />
      <div
        className="select__dropdown"
        tabIndex={-1}
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{ display: isShow ? "block" : "none" }}
      >
        {typeof datalist[0] === "string" &&
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
            .map((item, index) => (
              <div key={item.guid}>
                <input
                  type="checkbox"
                  value={item}
                  checked={tags.includes(item)}
                  onChange={handleCheckoxChange}
                  id={item}
                />
                <label htmlFor={item}>
                  <div>{item.guid}</div>
                  <div>{item.username}</div>
                </label>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Select;

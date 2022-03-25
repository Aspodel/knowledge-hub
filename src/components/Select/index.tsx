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
import { Color } from "../../utils/enum";

interface ISelectProps {
  datalist: any[];
  type?: "multiple" | "single";
  maxTags?: number;
  register: UseFormRegister<any>;
  name: string;
  setValue: UseFormSetValue<any>;
}

const Select = React.forwardRef<HTMLInputElement, ISelectProps>(
  ({ datalist, type = "multiple", maxTags, register, name, setValue }, ref) => {
    const [isShow, setShow] = useToggle(false);
    const [inputValue, setInputValue] = React.useState("");
    // const [tags, setTags] = React.useState<
    //   Array<{
    //     key: string;
    //     value: string;
    //   }>
    // >([]);
    const [tags, setTags] = React.useState<string[]>([]);
    const [isKeyReleased, setIsKeyReleased] = React.useState(false);
    const dataLst: any[] =
      typeof datalist[0] === "string"
        ? datalist
        : datalist.map((d) => d.username);

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
        !tags.includes(trimmedInput)
      ) {
        e.preventDefault();
        console.log("enter");
        // setTags((prev) => [
        //   ...prev,
        //   { key: Math.random().toString(), value: trimmedInput },
        // ]);

        if (dataLst.includes(trimmedInput)) {
          setTags((prev) => [...prev, trimmedInput]);
        }

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

    const search = (data: string[]) => {
      return data.filter(
        (item) =>
          item
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

    return (
      <div
        className="select"
        onFocus={() => setShow(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setShow(false);
          }
        }}
      >
        {tags.map((tag, index) => (
          <div className="select__tag">
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
        />
        <div
          className="select__dropdown"
          style={{ display: isShow ? "block" : "none" }}
        >
          {dataLst &&
            search(dataLst).map((item) => (
              <div key={item + "cb"}>
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
        </div>
      </div>
      // <input type="text" {...register(name)} />
    );
  }
);

// const Select= React.forwardRef<HTMLInputElement, ISelectProps> (
//   ({}),ref) => {
//   const [isShow, setShow] = useToggle(false);
//   const [inputValue, setInputValue] = React.useState("");
//   const [tags, setTags] = React.useState<
//     Array<{
//       key: string;
//       value: string;
//     }>
//   >([]);
//   const [isKeyReleased, setIsKeyReleased] = React.useState(false);
//   const dataLst: any[] =
//     typeof datalist[0] === "string"
//       ? datalist
//       : datalist.map((d) => d.username);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(e.target.value);
//   };

//   const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     const { key } = e;
//     const trimmedInput = inputValue.trim();

//     if (
//       key === "Enter" &&
//       trimmedInput.length &&
//       !datalist.includes(trimmedInput)
//     ) {
//       e.preventDefault();
//       console.log("enter");
//       setTags((prev) => [
//         ...prev,
//         { key: Math.random().toString(), value: trimmedInput },
//       ]);

//       setInputValue("");
//     }

//     if (key === "Backspace" && !inputValue.length && tags.length) {
//       e.preventDefault();
//       let tagsCopy = [...tags];
//       const poppedTag = tagsCopy.pop();

//       setTags(tagsCopy);
//       // setInputValue(poppedTag); backspace to edit prev tag
//     }

//     setIsKeyReleased(false);
//   };

//   const handleKeyUp = () => {
//     setIsKeyReleased(true);
//   };

//   const search = (data: string[]) => {
//     return data.filter(
//       (item) =>
//         item
//           .toString()
//           .toLowerCase()
//           .indexOf(inputValue.toString().toLowerCase()) > -1
//     );
//   };

//   React.useEffect(() => {
//     console.log(tags);
//   }, [tags]);

//   return (
//     <div
//       className="select"
//       onFocus={() => setShow(true)}
//       onBlur={(e) => {
//         if (!e.currentTarget.contains(e.relatedTarget)) {
//           setShow(false);
//         }
//       }}
//     >
//       <input
//         className="select__input"
//         onChange={handleChange}
//         onKeyDown={handleKeydown}
//         onKeyUp={handleKeyUp}
//       />
//       <div
//         className="select__dropdown"
//         style={{ display: isShow ? "inherit" : "none" }}
//       >
//         {dataLst &&
//           search(dataLst).map((item) => (
//             <label key={Math.random()}>
//               <input type="checkbox" value={item} ref={ref} />
//               {item}
//             </label>
//           ))}
//       </div>
//     </div>
//   );
// };

export default Select;

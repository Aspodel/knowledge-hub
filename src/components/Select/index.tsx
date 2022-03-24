import React from "react";
import { UseFormRegister } from "react-hook-form";
import useToggle from "../../hooks/useToggle";
import { IUser } from "../../interfaces";

interface ISelectProps<T = string | number | IUser> {
  datalist: T[];
  register: UseFormRegister<T>;
  type?: "multiple" | "single";
  max?: number;
}

const Select = <T extends string | number | IUser>({
  datalist = [],
  register,
  type = "multiple",
}: ISelectProps<T>) => {
  const [isShow, setShow] = useToggle(false);
  const [inputValue, setInputValue] = React.useState("");
  const [isKeyReleased, setIsKeyReleased] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const trimmedInput = inputValue.trim();

    if (
      key === "Enter" &&
      trimmedInput.length /* &&
      !datalist.includes(trimmedInput) */
    ) {
      e.preventDefault();
      // setTags((prevState) => [...prevState, trimmedInput]);
      setInputValue("");
    }

    if (key === "Backspace" && !inputValue.length /* && tags.length */) {
      e.preventDefault();
      // const tagsCopy = [...tags];
      // const poppedTag = tagsCopy.pop();

      // setTags(tagsCopy);
      // setInputValue(poppedTag);
    }

    setIsKeyReleased(false);
  };

  const handleKeyUp = () => {
    setIsKeyReleased(true);
  };

  return (
    <div className="select">
      <input
        className="select__input"
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        onChange={handleChange}
        onKeyDown={handleKeydown}
        onKeyUp={handleKeyUp}
      />
      <div className="select__dropdown">
        {datalist.map((item) => (
          <label key={Math.random()}>
            <input
              type="checkbox"
              value={item instanceof Object ? item.id : item}
              {...register}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default Select;

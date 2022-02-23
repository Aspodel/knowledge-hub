import React from "react";
import { tuple } from "../../utils/type";
import "./Checkbox.scss";

const CheckboxVariants = tuple("square", "tick");
type CheckboxVariant = typeof CheckboxVariants[number];

type CheckAllType<T> = {
  optionsValue: T[];
  checkedValue: T[];
};

interface ICheckboxProps<T = number> {
  id: T;
  variant?: CheckboxVariant;
  onChange?: any;
  checked?: boolean;
  checkAll?: CheckAllType<T>;
}

const Checkbox = <T extends {}>({
  id,
  variant = "tick",
  onChange,
  checked,
  checkAll,
}: ICheckboxProps<T>) => {
  let _checkAll =
    checkAll &&
    checkAll.optionsValue.every(
      (element) => checkAll.checkedValue.indexOf(element) > -1
    );
  let _checked = checkAll ? _checkAll : checked;

  return (
    <label htmlFor={String(id)} className="checkbox">
      <input
        type="checkbox"
        id={String(id)}
        onChange={onChange}
        checked={_checked}
      />
      <span className={`checkbox__checkmark -${variant}`} />
    </label>
  );
};

export default React.memo(Checkbox);

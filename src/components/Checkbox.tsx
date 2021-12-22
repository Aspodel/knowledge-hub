import React from "react";

type CheckAllType<T> = {
  optionsValue: T[];
  checkedValue: T[];
};

type CheckboxProps<T = number> = {
  id: T;
  variant?: "square" | "tick";
  onChange?: any;
  checked?: boolean;
  checkAll?: CheckAllType<T>;
};

const Checkbox = <T extends {}>({
  id,
  variant = "tick",
  onChange,
  checked,
  checkAll,
}: CheckboxProps<T>) => {
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

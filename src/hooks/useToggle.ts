import { useCallback, useState } from "react";

const useToggle = (initialState: boolean = false): [boolean, any] => {
  const [state, setState] = useState<boolean>(initialState);

  const setToggle = useCallback(
    (specificedValue: boolean): void =>
      specificedValue == null
        ? setState((state) => !state)
        : setState(specificedValue),
    []
  );
  return [state, setToggle];
};

export default useToggle;

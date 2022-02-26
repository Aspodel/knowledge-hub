import React from "react";

type TestNhaProps<T = number> = {
  yeah?: T;
  hehe?: T;
};

const TestNha = <T extends {}>(props: TestNhaProps<T>) => {
  return <div></div>;
};

export default TestNha;

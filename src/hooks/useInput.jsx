import { useState } from "react";

const useInput = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);
  const onChange = (event) => {
    setValue(event.target.value);
  };
  return [value];
};

export default useInput;

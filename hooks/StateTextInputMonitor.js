import { useState } from "react";

export const StateTextInputMonitor = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChangeText = (text) => {
    setInputValue(text);
    if (props.onChangeText) {
      props.onChangeText(text);
    }
  };

  return {
    handleChangeText,
    inputValue,
  };
};

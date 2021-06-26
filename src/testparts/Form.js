import React, { useState } from "react";

const TestForm = () => {
  const [buttonColor, setButtonColor] = useState("");

  const ButtonColor = (e) => {
    setButtonColor(e.target.value);
  };

  return (
    <>
      <div>テストフォーム</div>
      <input type="text" value={buttonColor} onChange={ButtonColor}></input>
    </>
  );
};

export default TestForm;

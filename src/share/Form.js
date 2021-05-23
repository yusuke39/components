import React, { useState } from "react";

const Form = () => {
  const [text, setText] = useState("");

  const changeColor = (e) => {
    setText(() => e.target.value);
  };

  return (
    <div>
      <p>現在の色 : {text}</p>
      <input onChange={changeColor} value={text} type="text"></input>
    </div>
  );
};

export default Form;

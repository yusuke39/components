// import React, { useState } from "react";

const Form = (props) => {
  // const [color, setColor] = useState("");

  // const [buttonColor, buttonWordColor] = useState("");

  const changeButtonColor = (e) => {
    // buttonWordColor(() => e.target.value);
    props.setButtonColor(e.target.value);
  };

  return (
    <>
      {/* <p>現在のボタン文字色 : {changeButtonColor}</p> */}
      <input
        onChange={changeButtonColor}
        value={props.color}
        type="text"
      ></input>
      {/* <p>現在のボタン背景色 : {backgroundColor}</p>
      <input
        onChange={changeBackgroundColor}
        value={backgroundColor}
        type="text"
      ></input>
      <p>現在の高さ : {height}</p>
      <input onChange={changeheigt} value={height} type="number"></input>
      <p>現在の横幅 : {width}</p>
      <input onChange={changeWidth} value={width} type="number"></input> */}
    </>
  );
};

export default Form;

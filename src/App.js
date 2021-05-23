import React, { useState } from "react";
import Button from "./share/Button";
// import Form from "./share/Form";

const App = () => {
  const [color, setColor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");

  const changeColor = (e) => {
    setColor(() => e.target.value);
  };

  const changeBackgroundColor = (e) => {
    setBackgroundColor(() => e.target.value);
  };

  const changeheigt = (e) => {
    setHeight(() => e.target.value);
  };

  const changeWidth = (e) => {
    setWidth(() => e.target.value);
  };

  return (
    <div>
      <p>現在のボタン文字色 : {color}</p>
      <input onChange={changeColor} value={color} type="text"></input>
      <p>現在のボタン背景色 : {backgroundColor}</p>
      <input
        onChange={changeBackgroundColor}
        value={backgroundColor}
        type="text"
      ></input>
      <p>現在の高さ : {height}</p>
      <input onChange={changeheigt} value={height} type="number"></input>
      <p>現在の横幅 : {width}</p>
      <input onChange={changeWidth} value={width} type="number"></input>
      <Button
        buttonName="PUSH"
        color={color}
        backgroundColor={backgroundColor}
        height={height}
        width={width}
      />
    </div>
  );
};

export default App;

import Button from "./Button";
import React, { Fragment, useState } from "react";

const Form = (props) => {
  //　練習1
  // Buttonコンポーネントを兄弟とした場合に親から渡す関数を使って
  // CSSの値をセットする
  // const changeButtonColor = (e) => {
  //   props.setButtonColor(e.target.value);
  // };

  // const changeButtonBackgroundColor = (e) => {
  //   props.setButtonBackGroundColor(e.target.value);
  // };

  const [color, setColor] = useState("");

  const changeButtonColor = (e) => {
    setColor(e.target.value);
  };

  return (
    //　練習1
    // Buttonコンポーネントを兄弟とした場合に使うjsx
    // <>
    //   <p>現在のボタン文字色 : {props.color}</p>
    //   <input
    //     onChange={changeButtonColor}
    //     value={props.color}
    //     type="text"
    //   ></input>
    //   <p>現在のボタン背景色 : {props.backgroundColor}</p>
    //   <input
    //     onChange={changeButtonBackgroundColor}
    //     value={props.backgroundColor}
    //     type="text"
    //   ></input>
    //   <p>現在の高さ : {height}</p>
    //   <input onChange={changeheigt} value={height} type="number"></input>
    //   <p>現在の横幅 : {width}</p>
    //   <input onChange={changeWidth} value={width} type="number"></input>
    // </>

    <>
      <p>現在のボタン文字色 : {color}</p>
      <input value={color} onChange={changeButtonColor} type="text"></input>
      <div>
        <Button buttonName="PUSH" color={color} />
      </div>
    </>
  );
};

export default Form;

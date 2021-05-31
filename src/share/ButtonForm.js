import Button from "./Button";
import React, { useState } from "react";
import "../css/share/ButtonForm.css";

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
      <div className="content-wrapper">
        <div className="form-wrapper">
          <p>ボタンの文字色</p>
          <input
            className="input-size"
            value={color}
            onChange={changeButtonColor}
            type="text"
          ></input>
        </div>
        <div className="button-wrapper">
          <Button buttonName="PUSH" color={color} />
        </div>
      </div>
    </>
  );
};

export default Form;

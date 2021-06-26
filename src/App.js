import React, { Fragment, useState } from "react";
import Form from "./share/ButtonForm";
import Button from "./share/Button";
// import ButtonForm from "./share/ButtonForm";
// import TitleForm from "./share/TitleForm";
// import TestForm from "./testparts/Form";
import "./css/share/All.css";

const App = () => {
  //　練習1 ====================================================================
  const [color, setColor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");

  const setButtonColor = (color) => {
    setColor(() => color);
  };

  const setButtonBackGroundColor = (backgroundColor) => {
    setBackgroundColor(() => backgroundColor);
  };
  //　練習1 ====================================================================

  return (
    //　練習1 ====================================================================
    <>
      <Form
        setButtonColor={setButtonColor}
        color={color}
        setButtonBackGroundColor={setButtonBackGroundColor}
        backgroundColor={backgroundColor}
      />
      <Button
        buttonName="PUSH"
        color={color}
        backgroundColor={backgroundColor}
        height={height}
        width={width}
        className="mainButton"
      />
    </>
    //　練習1 ====================================================================

    // 練習2======================================================================
    // <>
    //   <ButtonForm />
    //   <TitleForm />
    //   <TestForm />
    // </>
    // 練習2======================================================================
  );
};

export default App;

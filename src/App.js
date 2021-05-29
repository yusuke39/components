import React, { Fragment, useState } from "react";
import Button from "./share/Button";
import Form from "./share/Form";

const App = () => {
  //　練習1
  // const [color, setColor] = useState("");
  // const [backgroundColor, setBackgroundColor] = useState("");
  // // const [height, setHeight] = useState("");
  // // const [width, setWidth] = useState("");

  // const setButtonColor = (color) => {
  //   setColor(() => color);
  // };

  // const setButtonBackGroundColor = (backgroundColor) => {
  //   setBackgroundColor(() => backgroundColor);
  // };

  return (
    // 練習1
    // <>
    //   <Form
    //     setButtonColor={setButtonColor}
    //     color={color}
    //     setButtonBackGroundColor={setButtonBackGroundColor}
    //     backgroundColor={backgroundColor}
    //   />
    //   <Button
    //     buttonName="PUSH"
    //     color={color}
    //     backgroundColor={backgroundColor}
    //     // height={height}
    //     // width={width}
    //   />
    // </>
    <>
      <Form />
      <Form />
    </>
  );
};

export default App;

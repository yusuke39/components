import React, { useState } from "react";
import Button from "./share/Button";
// import Form from "./share/Form";

const App = () => {
  const [color, setText] = useState("");

  const changeColor = (e, color) => {
    setText(() => e.target.value);
  };

  return (
    <div>
      <p>現在の色 : {color}</p>
      <input onChange={changeColor} value={color} type="text"></input>
      <Button buttonName="押してみて" backgroundColor={color} />
      <Button buttonName="これ押して" backgroundColor={color} />
    </div>
  );
};

export default App;

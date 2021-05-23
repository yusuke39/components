import React from "react";
import Button from "./share/Button";
import Form from "./share/Form";

const App = () => {
  return (
    <div>
      <Form />
      <Button buttonName="押してみて" />
      <Button buttonName="これ押して" />
    </div>
  );
};

export default App;

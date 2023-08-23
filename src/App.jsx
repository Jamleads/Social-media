import { useState } from "react";
import "./index.css";
import Form from "./Components/Form";
import "react-toastify/dist/ReactToastify.css";
import Button from "./Components/Button";

function App() {
  return (
    <>
      <Button btnText="submit" />
      <Form />
    </>
  );
}

export default App;

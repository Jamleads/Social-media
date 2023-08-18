import { useState } from "react";
import reactLogo from "/assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import Form from "./Components/Form";
import "react-toastify/dist/ReactToastify.css";
import Chalenge from "./Components/Chalenge";

function App() {
  return (
    <>
      <div>
        <p>we are here</p>
        <Form />
        <Chalenge />
      </div>
    </>
  );
}

export default App;

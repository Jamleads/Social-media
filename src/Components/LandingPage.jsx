import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className=" w-screen h-screen bg-green-700 flex items-center justify-center">
      <h1 className="text-3xl font-bold">Here is the landing page</h1>
      <Link to="signUp">
        <Button
          btnText="Get Started"
          btnStyle=" px-10 py-2 text-mainWhite bg-red-400"
        />
      </Link>

      <Link to="login">
        <Button
          btnText="Login"
          btnStyle=" px-10 py-2 text-mainWhite bg-red-400"
        />
      </Link>
    </div>
  );
};

export default LandingPage;

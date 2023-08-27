import React from "react";
import Input from "./Input";
import Button from "./Button";
import leaf from "/assets/leaf.png";
import googleIcon from "/assets/googleIcon.svg";
import gitHubIcon from "/assets/github-icon.svg";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { googleAuth, gitAuth, nextPage } from "./Signup"; // nextPage will be use for login exacution after cheching if .email and .password exsit in the database

const Login = () => {
  return (
    <div className="h-screen w-full flex">
      <div className="lg:w-1/2 h-full bg-mainWhite flex items-center justify-center">
        <div className="lg:h-[85%] lg:w-[65%] px-10 py-5">
          <h1 className="text-3xl font-medium text-center">Welcome Back</h1>

          <div className="mt-10 flex items-center justify-between gap-5">
            <Button
              btnClick={googleAuth}
              btnIcon={googleIcon}
              btnText="Sign in with Google"
              btnStyle="text-sm py-1 border-[1px] border-mainBlack"
            />
            <Button
              btnClick={gitAuth}
              btnIcon={gitHubIcon}
              btnText="Sign in with GitHub"
              btnStyle="text-sm py-1 border-[1px] border-mainBlack"
              btnIconStyle="py-[2px]"
            />
          </div>

          <div className="border-b-4 border-[#e8e3e3] alt my-16 relative">
            <div className="text-center absolute -top-4 left-[43%] bg-mainWhite px-5 py-1 text-lg">
              OR
            </div>
          </div>

          <div className="form">
            <Input
              labelFor="email"
              labelText="Email Address"
              inputType="email"
              inputName="email"
              placeholder="Enter your email"
              inputStyle="mt-5"
              //   inputFeildStyle={`${
              //     isEmptyFields && !userDataField.email && "empty-field"
              //   }`}
              //   inputChange={handleInputChange}
            />
            <Input
              labelFor="password"
              labelText="Create Password"
              inputType="password"
              inputName="password"
              placeholder="Create password"
              inputStyle="mt-5"
              //   inputFeildStyle={`${
              //     isEmptyFields && !userDataField.password && "empty-field"
              //   }`}
              //   inputChange={handleInputChange}
            />

            <Link to="/home">
              <Button
                btnStyle="text-mainWhite bg-mainGreen w-full mt-6 font-bold py-1"
                btnText="Login"
                btnClick={() => {}}
              />
            </Link>

            <p className="text-center mt-5">
              Have no account? <Link to="/signUp">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 h-full bg-mainWhite">
        <img src={leaf} alt="" className="h-full w-full" />
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;

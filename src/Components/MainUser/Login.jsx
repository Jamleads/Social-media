import React, { useEffect, useState } from "react";
import Input from "../Input";
import Button from "../Button";
import leaf from "/assets/leaf.png";
import googleIcon from "/assets/googleIcon.svg";
import appleIcon from "/assets/apple-icon.svg";
import { toast, ToastContainer } from "react-toastify";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
// import ".../config/firestore.js";
// import { db } from ".../config/firestore";

// import ListOfUsers from "./Admin/ListOfUsers";

const Login = () => {
  const [isEmptyFields, setIsEmptyFields] = useState(false);
  const [ischecked, setIsChecked] = useState(false);
  const [userDataField, setuserDataField] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  //   const getUserData = async () => {
  //     const q = query(collection(db, "userData"));
  //     const querySnapshot = await getDocs(q);
  //     const users = querySnapshot.docs.map((user) => ({
  //       id: user.id,
  //       ...user.data(),
  //     }));
  //     console.log(users);
  //     setListOfUsers(users);
  //   };
  //   useEffect(() => {
  //     getUserData();
  //   }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setuserDataField((prevData) => ({ ...prevData, [name]: value }));
  };

  function submit() {
    if (Object.values(userDataField).some((field) => field === "")) {
      setIsEmptyFields(true);
      showToast("All feilds are required");
      return;
    }

    if (userDataField.email.includes("@")) {
      ("");
    } else {
      console.log("wrong email");
      showToast("email not correct");
    }

    if (userDataField.password !== userDataField.passwordConfirm) {
      console.log("password not the same");
      showToast("password not the same");
    }

    if (ischecked) {
      ("");
    } else {
      showToast("You need to agree with terms and policy");
    }

    if (
      !isEmptyFields &&
      userDataField.password === userDataField.passwordConfirm &&
      ischecked
    ) {
      console.log(userDataField);
      //   addUserData();
      showToast("successful");
    }
  }

  const showToast = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  //   useEffect(() => {
  //     fetch("https://restcountries.com/v3.1/all")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const countriesNames = data.map((country) => country.name.common);
  //         countriesNames.sort();
  //         setCountry(countriesNames);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching countries:", error);
  //       });
  //   }, []);

  //   const addUserData = async () => {
  //     try {
  //       await addDoc(collection(db, "userData"), {
  //         ...userDataField,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <div className="h-screen w-full flex">
      <div className="lg:w-1/2 h-full bg-mainWhite flex items-center justify-center">
        <div className="lg:h-[85%] lg:w-[65%] px-10 py-5">
          <h1 className="text-3xl font-medium">Get Started Now</h1>

          <div className="form mt-10">
            <Input
              labelFor="full name"
              labelText="Full Name"
              inputType="text"
              inputName="fullName"
              placeholder="Enter your full name"
              inputFeildStyle={`${
                isEmptyFields && !userDataField.fullName && "empty-field"
              }`}
              inputChange={handleInputChange}
            />
            <Input
              labelFor="email"
              labelText="Email Address"
              inputType="email"
              inputName="email"
              placeholder="Enter your email"
              inputStyle="mt-5"
              inputFeildStyle={`${
                isEmptyFields && !userDataField.email && "empty-field"
              }`}
              inputChange={handleInputChange}
            />
            <Input
              labelFor="password"
              labelText="Create Password"
              inputType="password"
              inputName="password"
              placeholder="Create password"
              inputStyle="mt-5"
              inputFeildStyle={`${
                isEmptyFields && !userDataField.password && "empty-field"
              }`}
              inputChange={handleInputChange}
            />

            <Input
              labelFor="password"
              labelText="Confirm Password"
              inputType="password"
              inputName="passwordConfirm"
              placeholder="Confirm a password"
              inputStyle="mt-5"
              inputFeildStyle={`${
                isEmptyFields && !userDataField.passwordConfirm && "empty-field"
              }`}
              inputChange={handleInputChange}
            />

            <div className="checkbox-wrap flex items-center mt-6">
              <input
                type="checkbox"
                name="terms"
                value="term"
                className="w-[20px] h-[20px]"
                onChange={(e) => {
                  e.target.checked
                    ? (setIsChecked(true), console.log("yes it is true"))
                    : console.log("still false");
                }}
              ></input>
              <label htmlFor="terms" className="ml-3">
                I agree to the <a href="#">terms & policy</a>
              </label>
            </div>

            <Button
              btnStyle="text-mainWhite bg-mainGreen w-full mt-6 font-bold py-1"
              btnText="SignUp"
              btnClick={() => submit()}
            />

            <div className="border-b-4 border-[#e8e3e3] alt my-16 relative">
              <div className="text-center absolute -top-4 left-[43%] bg-mainWhite px-5 py-1 text-lg">
                OR
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between gap-5">
              <Button
                btnIcon={googleIcon}
                btnText="Sign in with Google"
                btnStyle="text-sm py-1 border-[1px] border-mainBlack"
              />
              <Button
                btnIcon={appleIcon}
                btnText="Sign in with Apple"
                btnStyle="text-sm py-1 border-[1px] border-mainBlack"
              />
            </div>

            <p className="text-center mt-5">
              Have an account? <a href="#">Sign In</a>
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

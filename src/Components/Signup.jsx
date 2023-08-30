import React, { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import leaf from "/assets/leaf.png";
import googleIcon from "/assets/googleIcon.svg";
import gitHubIcon from "/assets/github-icon.svg";
import { toast, ToastContainer } from "react-toastify";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import "../config/firestore";
import { db } from "../config/firestore";
import { auth } from "../config/firestore";
import { Link } from "react-router-dom";
import {
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  GithubAuthProvider,
} from "firebase/auth";

export const nextPage = () => {
  window.location.href = "main"; // Redirect using window.location
  console.log("Redirecting...");
};

export const googleAuth = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
  // signInWithRedirect(auth, provider);

  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(result); // HAS THE OBJECT OF THE USER, CAN BE USED OFR DESTUCTURING
      console.log(credential);
      console.log(token);

      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.log(errorCode);
      console.log(errorMessage);
      console.log(email);
      console.log(credential);
      // ...
    });
};

export const gitAuth = () => {
  const provider = new GithubAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(token);
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      const email = error.customData.email;
      console.log(email);
      const credential = GithubAuthProvider.credentialFromError(error);
      console.log(credential);
    });
};

const Signup = () => {
  const [isEmptyFields, setIsEmptyFields] = useState(false);
  const [ischecked, setIsChecked] = useState(false);
  const [userDataField, setuserDataField] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const emailPasswordAuth = () => {
    createUserWithEmailAndPassword(
      auth,
      userDataField.email,
      userDataField.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        user.displayName = userDataField.fullName;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setuserDataField((prevData) => ({ ...prevData, [name]: value }));
  };

  function submit() {
    if (Object.values(userDataField).some((field) => field === "")) {
      setIsEmptyFields(true);
      showToast("All feilds are required");
      return;
    } else if (
      !userDataField.email.includes("@") ||
      !userDataField.email.includes(".")
    ) {
      console.log("wrong email");
      showToast("email not correct");
    } else if (userDataField.password !== userDataField.passwordConfirm) {
      showToast("password not the same");
    } else if (!ischecked) {
      showToast("You need to agree with terms and policy");
    } else if (
      !isEmptyFields &&
      userDataField.password === userDataField.passwordConfirm &&
      ischecked
    ) {
      emailPasswordAuth();
      showToast("Sign Up successful");
      nextPage();
    }
  }

  const showToast = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  const addUserData = async () => {
    try {
      await addDoc(collection(db, "userData"), {
        ...userDataField,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // const user = firebase.auth().currentUser;
  // if (user) {
  //   const token = user.getIdToken();
  //   console.log(token);
  // }

  return (
    <div className="h-screen w-full flex">
      <div className="lg:w-1/2 h-full bg-mainWhite flex items-center justify-center">
        <div className="lg:h-[85%] lg:w-[65%] px-10 py-5">
          <h1 className="text-3xl font-medium text-center">Get Started Now</h1>

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
                    ? setIsChecked(true)
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
              btnClick={submit}
            />

            <p className="text-center mt-5">
              Already had an account? <Link to="/login">Sign In</Link>
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

export default Signup;

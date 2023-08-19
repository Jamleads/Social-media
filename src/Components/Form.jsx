import React from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Form = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    passwordConfirm: "",
  });

  const [isEmptyFields, setIsEmptyFields] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  function checkEmail() {
    if (userData.email.includes("@")) {
      ("");
    } else {
      console.log("wrong email");
      showToast("email not correct");
    }
  }

  function submit() {
    checkEmail();
    if (Object.values(userData).some((field) => field === "")) {
      setIsEmptyFields(true);
      console.log("one of the feild is empty");
      showToast("one of the feild is empty");
      return;
    }
    if (!isEmptyFields && userData.password === userData.passwordConfirm) {
      console.log(userData);
      showToast("successful");
    } else {
      console.log("password not the same");
      showToast("password not the same");
    }
  }

  const showToast = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  return (
    <>
      <form action="" id="reg-form" className="regFormWrap">
        <input
          type="text"
          placeholder="First Name"
          className={`input ${
            isEmptyFields && !userData.firstName && "empty-field"
          }`}
          onChange={handleInputChange}
          name="firstName"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className={`input ${
            isEmptyFields && !userData.lastName && "empty-field"
          }`}
          onChange={handleInputChange}
          name="lastName"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className={`input ${
            isEmptyFields && !userData.email && "empty-field"
          }`}
          onChange={handleInputChange}
          name="email"
          required
        />
        <input
          type="text"
          placeholder="username"
          className={`input ${
            isEmptyFields && !userData.userName && "empty-field"
          }`}
          onChange={handleInputChange}
          name="userName"
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          className={`input ${
            isEmptyFields && !userData.password && "empty-field"
          }`}
          onChange={handleInputChange}
          name="password"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className={`input ${
            isEmptyFields && !userData.passwordConfirm && "empty-field"
          }`}
          onChange={handleInputChange}
          name="passwordConfirm"
          required
        />
        <input type="file" />

        <button
          onClick={(event) => {
            event.preventDefault();
            submit();
          }}
        >
          sunmit{" "}
        </button>
        <p className="message"></p>
      </form>

      <ToastContainer />
    </>
  );
};

export default Form;

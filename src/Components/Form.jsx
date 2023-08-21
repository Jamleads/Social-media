import React, { useEffect } from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { collection, query, where, getDocs } from "firebase/firestore";
import "../config/firestore";
import { db } from "../config/firestore";
import ListOfUsers from "./Admin/ListOfUsers";

const Form = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [isEmptyFields, setIsEmptyFields] = useState(false);
  const [countries, setCountry] = useState([]);

  const [userDataField, setuserDataField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    passwordConfirm: "",
    country: "",
  });

  const getUserData = async () => {
    const q = query(collection(db, "userData"));
    const querySnapshot = await getDocs(q);
    const users = querySnapshot.docs.map((user) => ({
      id: user.id,
      ...user.data(),
    }));
    console.log(users);
    setListOfUsers(users);
  };
  useEffect(() => {
    getUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setuserDataField((prevData) => ({ ...prevData, [name]: value }));
  };

  function checkEmail() {
    if (userDataField.email.includes("@")) {
      ("");
    } else {
      console.log("wrong email");
      showToast("email not correct");
    }
  }

  function submit() {
    checkEmail();
    if (Object.values(userDataField).some((field) => field === "")) {
      setIsEmptyFields(true);
      console.log("one of the feild is empty");
      showToast("one of the feild is empty");
      return;
    }
    if (
      !isEmptyFields &&
      userDataField.password === userDataField.passwordConfirm
    ) {
      console.log(userDataField);
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

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countriesNames = data.map((country) => country.name.common);
        countriesNames.sort();
        setCountry(countriesNames);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  return (
    <>
      <form action="" id="reg-form" className="regFormWrap">
        <input
          type="text"
          placeholder="First Name"
          className={`input ${
            isEmptyFields && !userDataField.firstName && "empty-field"
          }`}
          onChange={handleInputChange}
          name="firstName"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className={`input ${
            isEmptyFields && !userDataField.lastName && "empty-field"
          }`}
          onChange={handleInputChange}
          name="lastName"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className={`input ${
            isEmptyFields && !userDataField.email && "empty-field"
          }`}
          onChange={handleInputChange}
          name="email"
          required
        />
        <input
          type="text"
          placeholder="username"
          className={`input ${
            isEmptyFields && !userDataField.userName && "empty-field"
          }`}
          onChange={handleInputChange}
          name="userName"
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          className={`input ${
            isEmptyFields && !userDataField.password && "empty-field"
          }`}
          onChange={handleInputChange}
          name="password"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className={`input ${
            isEmptyFields && !userDataField.passwordConfirm && "empty-field"
          }`}
          onChange={handleInputChange}
          name="passwordConfirm"
          required
        />

        <select name="country" id="" onChange={handleInputChange}>
          <option value=""></option>
          {countries.map((country) => (
            <option value={country} key={country}>
              {country}
            </option>
          ))}
        </select>

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

      {listOfUsers.map((user) => (
        <div key={user.id}>
          <ListOfUsers {...user} />
        </div>
      ))}

      <ToastContainer />
    </>
  );
};

export default Form;

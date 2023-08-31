import { Children, Profiler, useState } from "react";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./Components/Signup";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Home from "./Components/Home";
import Layer from "./Components/Layer";
import Login from "./Components/Login";
import ProfilePage from "./Components/ProfilePage";
// import TweetFormState from "./Components/TweetFormState";
// import TweetForm from "./Components/TweetForm";

function App() {
  // const { tweetFormClicked, closeTweetForm } = TweetFormState();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<LandingPage />}></Route>
        <Route path="signUp" element={<Signup />}></Route>
        <Route path="login" element={<Login />}></Route>

        <Route path="main" element={<Layer />}>
          <Route index element={<Home />}></Route>
          <Route path="profile" element={<ProfilePage />}></Route>
          <Route></Route>
          <Route></Route>
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />

      {/* {tweetFormClicked ? (
        <div className="tweet-form-modal absolute top-0 left-0 h-[100vh] w-[100vw]">
          <div
            className="overlay absolute top-0 right-0 left-0 bottom-0 bg-[#9f969643]"
            onClick={closeTweetForm}
          ></div>

          <div className="bg-mainWhite w-[40%] h-[35%] mt-20 mx-auto rounded-2xl p-5 ">
            <TweetForm cancelBtn={""} cancelBtnClick={closeTweetForm} />
          </div>
        </div>
      ) : (
        ""
      )} */}
    </>
  );
}

export default App;

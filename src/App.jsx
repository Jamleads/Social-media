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
import Profile from "./Components/Profile";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<LandingPage />}></Route>
        <Route path="signUp" element={<Signup />}></Route>
        <Route path="login" element={<Login />}></Route>

        <Route path="main" element={<Layer />}>
          <Route index element={<Home />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route></Route>
          <Route></Route>
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

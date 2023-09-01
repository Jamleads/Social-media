import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MenuBar from "./MenuBar";
import TweetFormState from "./TweetFormState";

const Layer = () => {
  const { tweetFormClicked } = TweetFormState();

  if (tweetFormClicked) {
    console.log("yes it is true");
  }
  if (!tweetFormClicked) console.log("No it is not true");

  return (
    <div className="flex relative">
      <MenuBar />

      <main
        className={`w-[75%] ml-auto ${
          tweetFormClicked ? "overscroll-none" : ""
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
};
export default Layer;

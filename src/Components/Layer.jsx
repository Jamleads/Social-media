import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MenuBar from "./MenuBar";
import TweetForm from "./TweetForm";
import TweetFormState from "./TweetFormState";

const Layer = () => {
  const { tweetFormClicked, closeTweetForm } = TweetFormState();
  return (
    <div className="flex relative">
      <MenuBar />

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

      <main className="w-[75%] ml-auto">
        <Outlet onClick={""} />
      </main>
    </div>
  );
};

// export { tweetFormClicked, isTweetFormClicked };
export default Layer;

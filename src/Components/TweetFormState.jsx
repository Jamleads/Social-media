import { useState } from "react";
import React from "react";

const TweetFormState = () => {
  const [tweetFormClicked, setTweetFormClicked] = useState(true);
  // to manage tweetForm opening and closing

  const openTweetForm = () => {
    setTweetFormClicked(true);
  };
  const testing = () => {
    console.log("this is testing the tweetFormState us accessed");
  };

  const closeTweetForm = () => {
    setTweetFormClicked(false);
  };
  return { tweetFormClicked, openTweetForm, closeTweetForm, testing };
};

export default TweetFormState;

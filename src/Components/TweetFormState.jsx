import { useState } from "react";
import React from "react";

const TweetFormState = () => {
  const [tweetFormClicked, setTweetFormClicked] = useState(false);

  const openTweetForm = () => {
    setTweetFormClicked(true);
  };

  const closeTweetForm = () => {
    setTweetFormClicked(false);
  };
  return { tweetFormClicked, openTweetForm, closeTweetForm };
};

export default TweetFormState;

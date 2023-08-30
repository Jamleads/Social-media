import React, { useState } from "react";
import test from "/assets/test-img.jpg";
import ProfilePicture from "./ProfilePicture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";

const PostComp = () => {
  const [reTweet, setReTweet] = useState(true);
  return (
    <div>
      {reTweet ? (
        <div className="engagement-type indication ml-5 text-grayLink1 text-sm font-bold">
          <FontAwesomeIcon icon={faRepeat} /> <span>You tweeted</span>
        </div>
      ) : (
        ""
      )}
      <div className="flex">
        <ProfilePicture
          imgContainerStyle="w-[50px] h-[50px] rounded-full"
          userImg={test}
          userImgAlt="post owner image"
          userImgStlye="w-full h-full rounded-full"
        />

        <div className="tweet-details ml-3 mt-1 w-[90%]">
          <div>
            <span className="display-name font-bold display-name">
              Adetunji Jacob
            </span>{" "}
            <span className="userName text-grayLink1">
              <span>@</span>Adetunijay
            </span>{" "}
            <span className="tweet-date text-grayLink1">
              {new Date().toDateString()}
            </span>
          </div>

          <div className="tweet-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem aliquid, ea nesciunt eius dolore dicta ex dolores
              eveniet ipsam, inventore labore doloribus libero sit dignissimos
              placeat odio quasi nemo consequuntur!
            </p>

            <div className="media w-full h-[500px] mt-5 border-2 border-mainBlack">
              <img src={test} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComp;

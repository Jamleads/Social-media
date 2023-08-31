import React, { useState } from "react";
import test from "/assets/test-img.jpg";
import ProfilePicture from "./ProfilePicture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  // faHeart,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faComment,
  faShareFromSquare,
} from "@fortawesome/free-regular-svg-icons";

const PostComp = () => {
  const [reTweet, setReTweet] = useState(true);
  return (
    <div>
      {reTweet ? ( // if the tweeet was retweeted
        <div className="engagement-type indication ml-5 text-grayLink1 text-sm font-bold">
          <FontAwesomeIcon icon={faRepeat} /> <span>You retweeted</span>
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

            <div className="media w-full h-[500px] mt-5 border-2 border-mainBlack rounded-lg">
              <img src={test} alt="" className="w-full h-full rounded-lg" />
            </div>

            <div className="engagement-btns mt-5 flex items-center justify-around">
              <div className="comment group flex items-center ">
                <FontAwesomeIcon
                  icon={faComment}
                  className="group-hover:bg-[#1d9cf020] group-hover:text-commentColor p-3 rounded-full"
                />
                <span className="comment-count ml-1 group-hover:text-commentColor">
                  3
                </span>
              </div>

              <div className="comment group flex items-center ">
                <FontAwesomeIcon
                  icon={faRepeat}
                  className="group-hover:bg-[#00ba7c25] group-hover:text-reTweetColor ease-in-out p-3 rounded-full"
                />
                <span className="comment-count ml-1 group-hover:text-reTweetColor ease-in-out">
                  3
                </span>
              </div>

              <div className="comment group flex items-center ">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="group-hover:bg-[#f9188129] group-hover:text-likeColor p-3 rounded-full"
                />
                <span className="comment-count ml-1 group-hover:text-likeColor">
                  3
                </span>
              </div>

              <div className="comment group flex items-center ">
                <FontAwesomeIcon
                  icon={faChartSimple}
                  className="group-hover:bg-[#1d9cf020] group-hover:text-commentColor p-3 rounded-full"
                />
                <span className="comment-count ml-1 group-hover:text-commentColor">
                  3
                </span>
              </div>

              <div className="comment group flex items-center ">
                <FontAwesomeIcon
                  icon={faShareFromSquare}
                  className="group-hover:bg-[#1d9cf020] group-hover:text-commentColor p-3 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComp;

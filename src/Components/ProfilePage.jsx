import React from "react";
import Profile from "./Profile";
import Tweet from "./Tweet";

const ProfilePage = () => {
  return (
    <div className="h-[5500px] w-full flex flex-start">
      <div className="w-[60%] border-r-[0.1px] border-grayLink1">
        <Profile />

        <div className="user-engagment">
          <div className="engagment-type px-5 border-b-[0.1px] border-grayLink1 mt-5">
            <ul className="py-3 px-5 text-grayLink1 font-bold text-lg flex items-center justify-between">
              <li className="post">Post</li>
              <li className="replies">Replies</li>
              <li className="hightlights">Highlights</li>
              <li className="media">Media</li>
              <li className="likes">Likes</li>
            </ul>
          </div>

          <div className="px-5 mt-5 engagement-posts">
            <Tweet />
          </div>
        </div>
      </div>

      <div className="w-[40%] ">yes</div>
    </div>
  );
};

export default ProfilePage;

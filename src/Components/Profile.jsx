import React from "react";
import Button from "./Button";
import test from "/assets/test-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faArrowLeft,
  faLink,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import ProfilePicture from "./ProfilePicture";

const Profile = () => {
  return (
    <div className="w-full relative">
      <div className="upper w-full bg-mainWhite px-5 py-1 border-2 sticky top-0 flex items-center">
        <FontAwesomeIcon icon={faArrowLeft} className="text-xl" />
        <div className="name ml-8">
          <h3 className="text-xl font-bold display-name">Adetunji Jacob</h3>
          <p className="text-grayLink1">
            <span>830</span> post
          </p>
        </div>
      </div>

      <div className="profile-cover-wrap relative">
        <div className="cover-photo-wrap w-[100%] h-[25vh] bg-mainGreen">
          <img
            src="work on how the image will auto crop a size"
            alt="user cover photo"
            className="w-full h-full"
          />
        </div>

        <ProfilePicture
          imgContainerStyle="profile w-[200px] h-[200px] border-[8px] border-mainWhite rounded-full bg-red-300 absolute top-[120px] left-[20px]"
          userImg={test}
          userImgAlt="Your profile picture"
          userImgStlye="w-[100%] h-full profile-photo rounded-full"
        />

        {/* <div className="profile w-[200px] h-[200px] border-[8px] border-mainWhite rounded-full bg-red-300 absolute top-[160px] left-[20px]">
          <img
            src={test}
            alt="user profile photo"
            className="w-[100%] h-full profile-photo rounded-full"
          />
        </div> */}
      </div>

      <div className="px-10">
        <Button
          btnText="Edit Profile"
          btnStyle="border-[0.1px] border-grayLink1 text-lg py-1 ml-auto bg-transparent mt-6 rounded-[30px] border-[3px]"
        />
      </div>

      <div className="profile-details px-5 mt-10">
        <div className="name">
          <h3 className="text-2xl font-bold">
            Javascript Developer (Adetunji Jacob)
          </h3>
          <p className="text-grayLink1">
            @<span className="userName">Adetunjijay</span>
          </p>

          <div className="bio my-2 text-secondaryBlack">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe non
            iusto consequuntur quam fuga suscipit, minima voluptates atque ipsam
            minus laboriosam fugit quae nostrum porro molestias esse asperiores
            et nobis.
          </div>

          <div className="my-1">
            <span className="text-grayLink1">
              <FontAwesomeIcon icon={faLocationDot} />
              <span className="user-location"> Nigeria</span>
            </span>

            <span className="ml-5 text-grayLink1">
              <FontAwesomeIcon icon={faLink} />
              <a href="#" className="user-link-name">
                {" "}
                my website
              </a>
            </span>

            <span className="ml-5 text-grayLink1">
              <FontAwesomeIcon icon={faCalendarDays} />
              <span className="user-join-date">
                {" "}
                {new Date().toDateString()}
              </span>
            </span>
          </div>

          <div className="followers-details">
            <span className=" text-grayLink1">
              <span className="following text-mainBlack">88</span> Following
            </span>
            <span className="ml-5 text-grayLink1">
              <span className="follower text-mainBlack">120</span> Followers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

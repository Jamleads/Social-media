import React from "react";
import Button from "./Button";
import MenuBar from "./MenuBar";
import test from "/assets/test-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faArrowLeft,
  faLink,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
// import {toDateString}

const Profile = () => {
  return (
    <div className="h-[5500px] w-full flex">
      <div className="w-[60%] relative">
        <div className="upper w-full bg-mainWhite px-5 py-1 border-2 sticky top-0 flex items-center">
          {/* <p className="back-arrow"> &larr;</p> */}
          <FontAwesomeIcon icon={faArrowLeft} className="text-xl" />

          <div className="name ml-8">
            <h3 className="text-xl font-bold">
              Javascript Developer (Adetunji Jacob)
            </h3>
            <p>
              <span>830</span> post
            </p>
          </div>
        </div>

        <div className="profile-cover-wrap relative">
          <div className="cover-photo-wrap w-[100%] h-[30vh] bg-red-400">
            <img
              src="work on how the image will auto crop a size"
              alt="user cover photo"
              className="w-full h-full"
            />
          </div>

          <div className="profile w-[200px] h-[200px] border-[8px] border-mainWhite rounded-full bg-red-300 absolute top-[160px] left-[20px]">
            <img
              src={test}
              alt="user profile photo"
              className="w-[100%] h-full profile-photo rounded-full"
            />
          </div>
        </div>

        <div className="px-10">
          <Button
            btnText="Edit Profile"
            btnStyle="border-2 text-xl py-2 ml-auto bg-transparent mt-6 rounded-2xl border-[3px]"
          />
        </div>

        <div className="profile-details px-5 mt-10">
          <div className="name">
            <h3 className="text-2xl font-bold">
              Javascript Developer (Adetunji Jacob)
            </h3>
            <p>
              @<span className="userName">Adetunjijay</span>
            </p>

            <div className="bio my-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
              non iusto consequuntur quam fuga suscipit, minima voluptates atque
              ipsam minus laboriosam fugit quae nostrum porro molestias esse
              asperiores et nobis.
            </div>

            <div className="my-1">
              <span>
                <FontAwesomeIcon icon={faLocationDot} />
                <span className="user-location"> Nigeria</span>
              </span>

              <span className="ml-5">
                <FontAwesomeIcon icon={faLink} />
                <a href="#" className="user-link-name">
                  {" "}
                  my website
                </a>
              </span>

              <span className="ml-5">
                <FontAwesomeIcon icon={faCalendarDays} />
                <span className="user-join-date">
                  {" "}
                  {new Date().toDateString()}
                </span>
              </span>
            </div>

            <div className="followers-details">
              <span>
                <span className="following">88</span> Following
              </span>
              <span className="ml-5">
                <span className="follower">120</span> Followers
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[40%] bg-red-200 ">yes</div>
    </div>
  );
};

export default Profile;

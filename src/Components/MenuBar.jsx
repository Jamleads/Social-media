import React from "react";
import Button from "./Button";
import NavLink from "./NavLink";
import moreIcon from "/assets/More.svg";
import listIcon from "/assets/Lists.svg";
import brandLogo from "/assets/Hexagon.svg";
import profileIcon from "/assets/user.svg";
import homeIcon from "/assets/home-icon.svg";
import messagesIcon from "/assets/Messages.svg";
import exploreIcon from "/assets/search-icon.svg";
import communitiesIcon from "/assets/communities.svg";
import notificationIcon from "/assets/Notifications.svg";
import textImg from "/assets/leaf.png";
import optionIcon from "/assets/options.svg";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <div className="menubar border-borderColor border-2 w-[25%] h-screen sticky top-0 bottom-0 left-0">
      <div className="menubar-container lg:w-[80%] w-full h-screen lg:ml-auto">
        <div className="menuar-brand px-12">
          <img src={brandLogo} alt="" className="brand-logo w-[130px] -mt-5" />
        </div>

        <div className="menubar-links px-10 h-[85%]">
          <div className="flex flex-col items-center justify-between h-full">
            <div>
              <Link to="/main">
                <NavLink linkIcon={homeIcon} linkText="Home" />
              </Link>
              <NavLink linkIcon={exploreIcon} linkText="Explore" />
              <NavLink linkIcon={notificationIcon} linkText="Notification" />
              <NavLink linkIcon={messagesIcon} linkText="Messages" />
              <NavLink linkIcon={listIcon} linkText="List" />
              <NavLink linkIcon={communitiesIcon} linkText="Communities" />
              <Link to="profile">
                <NavLink linkIcon={profileIcon} linkText="Profile" />
              </Link>

              <NavLink linkIcon={moreIcon} linkText="More" />

              <Button
                btnClick={() => {}}
                btnIcon={brandLogo}
                btnIconAlt="band-logo"
                btnIconStyle="w-[30px]"
                btnText="Tweet"
                btnStyle="bg-mainGreen py-4 mt-5 w-full text-mainWhite rounded-full"
              />
            </div>

            <div className=" w-full user-link px-3 flex items-center rounded-full py-1">
              <div className="w-[40px] h-[40px] rounded-full">
                <img
                  src={textImg}
                  alt="user-profile-image"
                  className="w-full h-full rounded-full"
                />
              </div>

              <div className="ml-3">
                <h1>User Display name</h1>
                <p>@userName</p>
              </div>

              <div className="w-[20px] ml-auto">
                <img src={optionIcon} alt="more-option Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;

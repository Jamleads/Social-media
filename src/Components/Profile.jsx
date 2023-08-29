import React from "react";
import Button from "./Button";
import MenuBar from "./MenuBar";

const Profile = () => {
  return (
    <div className=" bg-red-600 h-[5500px] W-full">
      <h1>profile is here</h1>
      <div className="cover-photo-wrap">
        <img src="" alt="user cobver photo" />
        <img src="" alt="user profile photo" className="profile-photo" />
      </div>
      <div className="profile-details">
        <Button
          btnText="Edit Prfile"
          btnStyle="rounded-full border-2 px-5 py-1"
        />
      </div>
    </div>
  );
};

export default Profile;

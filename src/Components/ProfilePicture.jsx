import React from "react";

const ProfilePicture = ({
  imgContainerStyle,
  userImg,
  userImgAlt,
  userImgStlye,
}) => {
  return (
    <div className={`${imgContainerStyle}`}>
      <img src={userImg} alt={userImgAlt} className={userImgStlye} />
    </div>
  );
};

export default ProfilePicture;

import React from "react";

const NavLink = ({ linkIcon, linkText, linkStyle }) => {
  return (
    <div
      className={`${linkStyle} hover:bg-[#d9d1d1] menubar-link flex items-center py-2 px-3 rounded-full mt-3`}
    >
      <div className="link-icon">
        <img src={linkIcon} alt="home-icon" className="w-[30px]" />
      </div>

      <div className="link-text ml-5">
        <p className="text-xl text-textColor1 ">{linkText}</p>
      </div>
    </div>
  );
};

export default NavLink;

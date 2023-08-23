import React from "react";

const Button = ({ btnStyle, btnClick, btnText }) => {
  return (
    <button className={`${btnStyle} bg-red-500`} onClick={btnClick}>
      {btnText}
    </button>
  );
};

export default Button;

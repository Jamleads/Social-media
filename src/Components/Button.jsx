import React from "react";

const Button = ({
  btnStyle,
  btnClick,
  btnText,
  btnIcon,
  btnIconAlt,
  btnIconStyle,
}) => {
  return (
    <button
      className={`${btnStyle} flex items-center justify-center gap-x-3 px-5`}
      onClick={btnClick}
    >
      <img src={btnIcon} alt={btnIconAlt} className={`${btnIconStyle}`} />
      {btnText}
    </button>
  );
};

export default Button;

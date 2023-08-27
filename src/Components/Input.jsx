import React from "react";

const Input = ({
  labelFor,
  labelText,
  inputType,
  placeholder,
  inputStyle,
  inputName,
  inputChange,
  inputFeildStyle,
}) => {
  return (
    <div className={`${inputStyle}`}>
      <label htmlFor={labelFor} className="text-lg font-bold">
        {labelText}
      </label>
      <br />
      <input
        type={inputType}
        placeholder={placeholder}
        name={inputName}
        onChange={inputChange}
        className={`${inputFeildStyle} border-2 border-offWhite rounded-lg px-5 py-2 w-full bg-transparent`}
      />
    </div>
  );
};

export default Input;

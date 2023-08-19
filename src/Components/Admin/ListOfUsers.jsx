import React from "react";

const ListOfUsers = ({ userName, firstName, lastName, email, country }) => {
  return (
    <div className="userList">
      <p>{userName}</p>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p>
      <p>{country}</p>
    </div>
  );
};
export default ListOfUsers;

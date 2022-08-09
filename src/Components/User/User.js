import React from "react";
import User1 from "../../assets/Icons/User.svg";

import "./User.styles.css";

const User = () => {
  return (
    <button className="users">
      <img src={User1} alt="user" />
      <p>Minha Conta</p>
    </button>
  );
};

export default User;

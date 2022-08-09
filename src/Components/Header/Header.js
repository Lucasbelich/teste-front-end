import React from "react";

import SearchBar from "../SearchBar/SearchBar";
import User from "../User/User";
import Cart from "../Cart/Cart";

import IconMenu from "../../assets/Icons/Icon.svg";
import Logo from "../../assets/Icons/Logo.svg";

import "./Header.styles.css";

const Header = () => {
  return (
    <header className="header_container">
      <button className="button_menu">
        <img src={IconMenu} alt="IconMenu" />
      </button>
      <img className="header_logo" src={Logo} alt="Logo" />
      <SearchBar />
      <User />
      <Cart />
    </header>
  );
};

export default Header;

import React from "react";
import Search from "../../assets/Icons/Search.svg";

import "../SearchBar/SearchBar.styles.css";

const SearchBar = () => {
  return (
    <form className="search_container">
      <input type="text" placeholder="O que está procurando?" />
      <button type="submit">
        <img src={Search} alt="search" />
      </button>
    </form>
  );
};

export default SearchBar;

import React from "react";
import SearchIcon from "@material-ui/icons/Search";

import "./HeaderSearch.css";

const HeaderSearch = () => {
  return (
    <div className="header__search">
      <input type="text" className="header__search__input" />
      <SearchIcon className="header__searchIcon" />
    </div>
  );
};

export default HeaderSearch;

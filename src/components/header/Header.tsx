import React from "react";

import HeaderNav from "./headernav/HeaderNav";
import HeaderSearch from "./headersearch/HeaderSearch";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          className="header__logo"
          alt=""
        />
      </Link>
      <HeaderSearch />
      <HeaderNav />
    </div>
  );
};

export default Header;

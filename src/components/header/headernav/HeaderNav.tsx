import React from "react";
import { Link } from "react-router-dom";
import ShoppingBacketIcon from "@material-ui/icons/ShoppingBasket";

import HeaderNavOption from "./headernavoption/HeaderNavOption";
import "./HeaderNav.css";
import { useStateValue } from "../../../contexts/StateProvider";

const HeaderNav = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header__nav">
      <HeaderNavOption lineOne="Hello Guest" lineTwo="Sign In" />
      <HeaderNavOption lineOne="Returns" lineTwo="& Orders" />
      <HeaderNavOption lineOne="Your" lineTwo="Prime" />
      <Link to="/checkout">
        <div className="header__option__basket">
          <ShoppingBacketIcon />
          <span className="header__optionLineTwo header__basket__count">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default HeaderNav;

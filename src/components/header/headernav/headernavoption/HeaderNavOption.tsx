import React, { FunctionComponent } from "react";

import "./HeaderNavOption.css"

type HeaderNavOptionProps = {
  lineOne?: string;
  lineTwo?: string;
};

const HeaderNavOption: FunctionComponent<HeaderNavOptionProps> = ({lineOne, lineTwo}) => {
  return (
    <div className="header__nav__option">
      <span className="header__optionLineOne">{lineOne}</span>
      <span className="header__optionLineTwo">{lineTwo}</span>
    </div>
  );
};

HeaderNavOption.defaultProps = {
  lineOne: "",
  lineTwo: "",
};

export default HeaderNavOption;

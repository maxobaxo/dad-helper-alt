import React from "react";
import { AppBar } from "react-toolbox/lib/app_bar";
import "./../styles/Header.css";

function Header(props) {
  return <AppBar title="Get To Know Your Baby" leftIcon="child_friendly" />;
}

export default Header;

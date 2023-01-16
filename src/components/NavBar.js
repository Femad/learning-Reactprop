import React from "react";
import "../css/navBar.css";
import logo from "../images/airbnb-logo.png";

function NavBar() {
  return (
    <div className="nav--main">
      <img src={logo} alt="airbnb logo" className="nav--logo" />
    </div>
  );
}

export default NavBar;

import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

function Header() {
  return (
    <nav className="navBar">
      <div className="containLogo">
        <img src={logo} alt="logo" />
      </div>
    </nav>
  );
}

export default Header;

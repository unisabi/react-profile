import React from "react";
import "./header.css";

import Navbar from "../navbar/navbar";
function Header(props) {
  return (
    <div className="header--container">
      <div className="header--left">Sabina</div>
      <div className="header--right">
        <Navbar />
      </div>
    </div>
  );
}

export default Header;

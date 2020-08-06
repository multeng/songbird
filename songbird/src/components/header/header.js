import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header d-flex">
      <h1>Songbird</h1>
      <h5>
        Score:
        <span>15</span>
      </h5>
    </div>
  );
};

export default Header;

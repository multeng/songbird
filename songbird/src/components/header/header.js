import React from "react";
import "./header.css";

const Header = ({ score }) => {
  return (
    <div className="header d-flex">
      <h1>Songbird</h1>
      <h5>
        Score:
        <span>{score}</span>
      </h5>
    </div>
  );
};

export default Header;

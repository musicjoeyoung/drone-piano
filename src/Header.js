import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Header() {
  return (
    <div className="main-container">
      <div className="nav-bar-container">
        <a href="/">
          <h1 id="title">Drone Piano</h1>
        </a>
      </div>
    </div>
  );
}
export default Header;

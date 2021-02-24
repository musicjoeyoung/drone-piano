import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Header() {
  return (
    <div className="main-container">
      <div className="nav-bar-container">
        <nav id="nav">
          <h1 id="main-title">Drone Piano</h1>
          <Link className="nav-bar-routes" to="/piano">
            Piano
          </Link>
        </nav>
      </div>
    </div>
  );
}
export default Header;

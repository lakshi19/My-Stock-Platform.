import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  shadow-sm" style={{backgroundColor:"#eedcff"}}>
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/">
          Zerodha
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pricing">
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/support">
                Support
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

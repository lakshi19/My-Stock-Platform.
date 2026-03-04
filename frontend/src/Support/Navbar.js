import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div className="container">

        
        <a className="navbar-brand fw-bold" href="/" style={{ color: "#387ed1" }}>
          Zerodha
        </a>

        
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <a className="nav-link nav-hover mx-3" href="#">Signup</a>
            </li>

            <li className="nav-item">
              <a className="nav-link nav-hover mx-3" href="#">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link nav-hover mx-3" href="#">Products</a>
            </li>

            <li className="nav-item">
              <a className="nav-link nav-hover mx-3" href="#">Pricing</a>
            </li>

            <li className="nav-item">
              <a className="nav-link nav-hover mx-3" href="#">Support</a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
import React from "react";
import "./index.css";

function Pricing() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        <div className="col-md-5">
          <h1 className="fw-bold mb-3">
            Unbeatable Pricing
            <i className="fa fa-inr ms-2"></i>
          </h1>

          <p className="text-muted" style={{ lineHeight: "1.7" }}>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a
            href="#"
            style={{
              textDecoration: "none",
              fontWeight: "500",
              color: "#387ed1",
              fontSize: "16px",
            }}
          >
            See Pricing <i className="fa fa-arrow-right ms-2"></i>
          </a>
        </div>

        <div className="col-md-7">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="p-4 shadow-sm rounded bg-white h-100 pricing-card">
                <h1 className="fw-bold" style={{ color: "#387ed1" }}>
                  ₹0
                </h1>
                <p className="text-muted small">
                  Free equity delivery and direct mutual funds
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 shadow-sm rounded bg-white h-100 pricing-card">
                <h1 className="fw-bold" style={{ color: "#387ed1" }}>
                  ₹20
                </h1>
                <p className="text-muted small">Intraday and F&O trades</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 shadow-sm rounded bg-white h-100 pricing-card">
                <h1 className="fw-bold" style={{ color: "#387ed1" }}>
                  ₹0
                </h1>
                <p className="text-muted small">Free account opening</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

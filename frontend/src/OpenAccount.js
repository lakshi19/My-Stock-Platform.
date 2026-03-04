import React from "react";

function OpenAccount() {
  return (
    <div className="container text-center mt-5 mb-5">

      <h2 className="fw-bold mb-3">
        Open a Zerodha account
      </h2>

      <p className="text-muted mb-4" style={{ maxWidth: "600px", margin: "auto" }}>
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
        and F&O trades.
      </p>

      <button
        className="btn btn-primary px-4 py-2"
        style={{
          backgroundColor: "#387ed1",
          border: "none",
          fontSize: "18px",
          fontWeight: "500"
        }}
      >
        Sign up now
      </button>

    </div>
  );
}

export default OpenAccount;
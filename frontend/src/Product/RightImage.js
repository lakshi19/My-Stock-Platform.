import React from "react";

function RightImageSection() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">Console</h2>

          <p className="text-muted">
            The central dashboard for your trading account. Console
            gives detailed insights into your portfolio, trades,
            profits, and losses with powerful visual reports.
          </p>

          <p className="text-primary fw-semibold">
            Learn More →
          </p>
        </div>

        
        <div className="col-md-6">
          <img
            src="/media/images/console.png"
            alt="Console Dashboard"
            className="img-fluid"
            style={{ width: "90%" }}
          />
        </div>

      </div>
    </div>
  );
}

export default RightImageSection;
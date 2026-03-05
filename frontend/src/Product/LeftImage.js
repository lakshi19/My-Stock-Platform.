import React from "react";

function LeftImageSection() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        
        <div className="col-md-6">
          <img
            src="/media/images/kite.png"
            alt="Kite Trading Platform"
            className="img-fluid"
            style={{ width: "90%" }}
          />
        </div>

        
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">Kite</h2>

          <p className="text-muted">
            Our ultra-fast flagship trading platform with streaming market
            data, advanced charts, and an elegant UI. Kite allows seamless
            trading across web, mobile, and tablet devices.
          </p>

          <p className="text-primary fw-semibold">
            Try Demo → &nbsp;&nbsp; Learn More →
          </p>
        </div>

      </div>
    </div>
  );
}

export default LeftImageSection;
import React from "react";

function Hero() {
  return (
    <div className="container">

      {/* Heading Section */}
      <div className="row text-center p-5">

        <h1 className="fs-2 fw-bold">
          Charges
        </h1>

        <p className="text-muted mt-3">
          List of all charges and taxes
        </p>

      </div>

      <hr />

      
      <div className="row text-center mt-5">

        
        <div className="col-md-4 p-4">
          <h1 className="text-primary fw-bold">₹0</h1>
          <p className="text-muted">
            Free equity delivery and direct mutual fund investments
          </p>
        </div>

        
        <div className="col-md-4 p-4">
          <h1 className="text-primary fw-bold">₹20</h1>
          <p className="text-muted">
            Intraday and F&O trades
          </p>
        </div>

        
        <div className="col-md-4 p-4">
          <h1 className="text-primary fw-bold">₹20</h1>
          <p className="text-muted">
            All currency and commodity trades
          </p>
        </div>

      </div>

    </div>
  );
}

export default Hero;
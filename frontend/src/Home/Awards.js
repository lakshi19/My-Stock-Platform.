import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

         
        <div className="col-lg-6 p-5">
          <img
            src="media/images/largestBroker.svg"
            alt="largest broker"
            className="img-fluid"
          />
        </div>

        
        <div className="col-lg-6 p-5">

          <h1 className="mb-4">Largest stock broker in India</h1>

          <p className="text-muted mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          
          <div className="d-flex justify-content-between list-section">

            <ul className="list-unstyled">
              <li>Futures and Options</li>
              <li>Stocks & IPOs</li>
              <li>Commodity Derivatives</li>
            </ul>

            <ul className="list-unstyled">
              <li>Direct Mutual Funds</li>
              <li>Currency Derivatives</li>
              <li>Bonds and Govt. Securities</li>
            </ul>

          </div>

        
          <div className="press-section mt-4 p-3">
            <img
              src="media/images/pressLogos.png"
              alt="press logos"
              className="img-fluid"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Awards;
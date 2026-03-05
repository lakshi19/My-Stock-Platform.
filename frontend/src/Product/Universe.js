import React from "react";

function Universe() {
  return (
    <div className="container text-center mt-5 mb-5">

    
      <h2 className="fw-bold mb-3">
        The Zerodha Universe
      </h2>

      <p className="text-muted mb-5">
        Extend your trading and investment experience with our partner platforms.
      </p>

      
      <div className="row justify-content-center">

        <div className="col-md-3 mb-4">
          <img
            src="/media/images/kite.png"
            alt="Kite"
            style={{ width: "120px" }}
          />
          <p className="text-muted mt-2 small">
            Ultra-fast trading platform
          </p>
        </div>

        <div className="col-md-3 mb-4">
          <img
            src="/media/images/console.png"
            alt="Console"
            style={{ width: "120px" }}
          />
          <p className="text-muted mt-2 small">
            Portfolio & reporting dashboard
          </p>
        </div>

        <div className="col-md-3 mb-4">
          <img
            src="/media/images/coin.png"
            alt="Coin"
            style={{ width: "120px" }}
          />
          <p className="text-muted mt-2 small">
            Direct mutual fund investments
          </p>
        </div>

      </div>

      
      <div className="row justify-content-center">

        <div className="col-md-3 mb-4">
          <img
            src="/media/images/varsity.png"
            alt="Varsity"
            style={{ width: "120px" }}
          />
          <p className="text-muted mt-2 small">
            Free and open stock market education
          </p>
        </div>

        <div className="col-md-3 mb-4">
          <img
            src="/media/images/sensibull.png"
            alt="Sensibull"
            style={{ width: "120px" }}
          />
          <p className="text-muted mt-2 small">
            Options trading platform
          </p>
        </div>

        <div className="col-md-3 mb-4">
          <img
            src="/media/images/streak.png"
            alt="Streak"
            style={{ width: "120px" }}
          />
          <p className="text-muted mt-2 small">
            Algo trading without coding
          </p>
        </div>

      </div>

      
      <button className="btn btn-primary mt-4 px-4">
        Sign up Now
      </button>

    </div>
  );
}

export default Universe;
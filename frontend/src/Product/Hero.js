import React from "react";

function Hero() {
  return (
    <div className="container text-center mt-5">
      <div className="row justify-content-center">

        <div className="col-md-8">
          <img
            src="/media/images/homeHero.png"
            alt="Zerodha Platform"
            className="img-fluid mb-4"
            style={{ width: "65%" }}
          />

          <h1 className="fw-bold mb-3">
            Invest in everything
          </h1>

          <p className="text-muted fs-5 mb-4">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>

          <button className="btn btn-primary btn-lg">
            Sign up now
          </button>
        </div>

      </div>
    </div>
  );
}

export default Hero;
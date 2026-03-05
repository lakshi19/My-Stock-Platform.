import React from "react";
import "../App.css";

function ProductPage() {
  return (
    <div className="container">

      
      <div className="row text-center p-5">
        <h1 className="fs-2">Our Products</h1>
        <p className="text-muted">
          Sleek, modern, and intuitive trading platforms.
        </p>
      </div>

      
      <div className="row align-items-center mb-5">

        <div className="col-md-6">
          <img
            src="/media/images/kite.png"
            className="img-fluid"
            alt="Kite"
          />
        </div>

        <div className="col-md-6">
          <h3>Kite</h3>
          <p className="text-muted">
            Our ultra-fast flagship trading platform with streaming market
            data, advanced charts, and an elegant UI for seamless trading
            across devices.
          </p>
        </div>

      </div>

      
      <div className="row align-items-center mb-5">

        <div className="col-md-6 order-md-2">
          <img
            src="/media/images/console.png"
            className="img-fluid"
            alt="Console"
          />
        </div>

        <div className="col-md-6 order-md-1">
          <h3>Console</h3>
          <p className="text-muted">
            The central dashboard for your Zerodha account. Track portfolio
            performance, analyze trades, and manage investments easily.
          </p>
        </div>

      </div>

      
      <div className="row align-items-center mb-5">

        <div className="col-md-6">
          <img
            src="/media/images/coin.png"
            className="img-fluid"
            alt="Coin"
          />
        </div>

        <div className="col-md-6">
          <h3>Coin</h3>
          <p className="text-muted">
            Invest in direct mutual funds online with zero commission.
            Build long-term wealth using India's largest direct mutual
            fund platform.
          </p>
        </div>

      </div>

      
      <div className="row align-items-center mb-5">

        <div className="col-md-6 order-md-2">
          <img
            src="/media/images/varsity.png"
            className="img-fluid"
            alt="Varsity"
          />
        </div>

        <div className="col-md-6 order-md-1">
          <h3>Varsity</h3>
          <p className="text-muted">
            Learn stock markets for free with the most comprehensive
            educational platform for traders and investors.
          </p>
        </div>

      </div>

    </div>
  );
}

export default ProductPage;
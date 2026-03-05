import React from "react";

function Brokerage() {
  return (
    <div className="container mt-5 mb-5">

      
      <div className="text-center mb-5">
        <h1 className="fw-bold">Brokerage charges</h1>
        <p className="text-muted">
          Transparent pricing with no hidden charges.
        </p>
      </div>

    
      <div className="table-responsive">
        <table className="table table-bordered text-center">

          <thead className="table-light">
            <tr>
              <th>Segment</th>
              <th>Brokerage</th>
              <th>Maximum</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Equity Delivery</td>
              <td>₹0</td>
              <td>Free</td>
            </tr>

            <tr>
              <td>Equity Intraday</td>
              <td>0.03%</td>
              <td>₹20 per order</td>
            </tr>

            <tr>
              <td>Equity Futures</td>
              <td>0.03%</td>
              <td>₹20 per order</td>
            </tr>

            <tr>
              <td>Equity Options</td>
              <td>Flat ₹20</td>
              <td>₹20 per order</td>
            </tr>

            <tr>
              <td>Currency Futures</td>
              <td>0.03%</td>
              <td>₹20 per order</td>
            </tr>

            <tr>
              <td>Currency Options</td>
              <td>Flat ₹20</td>
              <td>₹20 per order</td>
            </tr>

            <tr>
              <td>Commodity Futures</td>
              <td>0.03%</td>
              <td>₹20 per order</td>
            </tr>

            <tr>
              <td>Commodity Options</td>
              <td>Flat ₹20</td>
              <td>₹20 per order</td>
            </tr>
          </tbody>

        </table>
      </div>

      
      <div className="row mt-5">

        <div className="col-md-6">
          <h5 className="fw-semibold">Free equity delivery</h5>
          <p className="text-muted">
            All equity delivery investments are completely free.
            There are no brokerage charges when you buy stocks
            and hold them for long-term investments.
          </p>
        </div>

        <div className="col-md-6">
          <h5 className="fw-semibold">Flat ₹20 brokerage</h5>
          <p className="text-muted">
            For intraday, futures, and options trades,
            Zerodha charges a flat ₹20 or 0.03% (whichever is lower)
            per executed order.
          </p>
        </div>

      </div>

      
      <div className="text-center mt-5">
        <button className="btn btn-primary px-5 py-2">
          Open an Account
        </button>
      </div>

    </div>
  );
}

export default Brokerage;
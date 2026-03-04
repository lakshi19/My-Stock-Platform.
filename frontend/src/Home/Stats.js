import React from "react";

function Stats() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        
        <div className="col-md-6">
          <h1 className="fw-bold mb-4" style={{ color: "#387ed1" }}>
            Trust with Confidence
          </h1>

          <h5 className="fw-semibold">
            <i className="bi bi-people-fill me-2 text-primary"></i>
            Customer-first Always
          </h5>
          <p className="text-muted">
            That's why <b>1.3+ crore</b> customers trust us with
            <b> 3.6+ crore</b> daily orders. Our mission is to make investing
            simple and accessible for everyone.
          </p>

          <h5 className="fw-semibold mt-4">
            <i className="bi bi-shield-check me-2 text-success"></i>
            No Spam or Gimmicks
          </h5>
          <p className="text-muted">
            We don't do cold calls, spam emails, or marketing gimmicks. Our
            focus is on building great products and providing excellent support
            to our customers.
          </p>

          <h5 className="fw-semibold mt-4">
            <i className="bi bi-globe2 me-2 text-warning"></i>
            The Zerodha Universe
          </h5>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in
            <b> 30+ fintech startups</b> provide services tailored to your
            financial needs.
          </p>

          <h5 className="fw-semibold mt-4">
            <i className="bi bi-lightbulb-fill me-2 text-danger"></i>
            Do Better with Money
          </h5>
          <p className="text-muted">
            Learn investing through our educational platform and make smarter
            financial decisions.
          </p>
        </div>

        <div className="col-md-6 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid"
            style={{ width: "85%" }}
          />

          <div className="text-center mt-3">
            <a href="#" className="mx-4 text-decoration-none">
              Explore our products
              <i className="fa fa-line-chart ms-2"></i>
            </a>

            <a href="#" className="text-decoration-none">
              Try Kite demo
              <i className="fa fa-line-chart ms-2"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;
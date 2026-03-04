import React from "react";

function Footer() {
  return (
    <footer className="bg-light mt-5 pt-5 pb-3 border-top">
      <div className="container">

        <div className="row">

          
          <div className="col-md-3 mb-4">
            <img
              src="media/images/logo.svg"
              style={{ width: "120px" }}
              alt="Zerodha Logo"
              className="mb-3"
            />

            <p className="text-muted small">
              © 2026 Zerodha  <br />
              Developed by Lakshita Pandey  <br />
              All rights reserved.

              
            </p>

            <div>
              <i className="fa fa-twitter me-3"></i>
              <i className="fa fa-facebook me-3"></i>
              <i className="fa fa-linkedin"></i>
            </div>
          </div>

          
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Company</h6>

            <ul className="list-unstyled text-muted">
              <li className="mb-2"><a href="#" className="footer-link">About</a></li>
              <li className="mb-2"><a href="#" className="footer-link">Products</a></li>
              <li className="mb-2"><a href="#" className="footer-link">Pricing</a></li>
              <li className="mb-2"><a href="#" className="footer-link">Referral program</a></li>
              <li className="mb-2"><a href="#" className="footer-link">Careers</a></li>
              <li className="mb-2"><a href="#" className="footer-link">Press & media</a></li>
            </ul>
          </div>

          
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Support</h6>

            <ul className="list-unstyled text-muted">
              <li className="mb-2"><a href="#" className="footer-link">Contact</a></li>
              <li className="mb-2"><a href="#" className="footer-link">Support portal</a></li>
              <li className="mb-2"><a href="#" className="footer-link">Z-Connect blog</a></li>
              <li className="mb-2"><a href="#" className="footer-link">List of charges</a></li>
            </ul>
          </div>

        
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Account</h6>

            <ul className="list-unstyled text-muted">
              <li className="mb-2"><a href="#" className="footer-link">Open an account</a></li>
              <li className="mb-2"><a href="#" className="footer-link">Fund transfer</a></li>
              <li className="mb-2"><a href="#" className="footer-link">60 day challenge</a></li>
            </ul>
          </div>

        </div>

        
        <hr />

        <p className="text-muted small text-center">
  🤓 Zerodha Project — Built by Lakshita Pandey.
</p>

      </div>
    </footer>
  );
}

export default Footer;
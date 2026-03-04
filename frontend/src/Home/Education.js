import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">

        
        <div className="col-md-6 text-center">
          <img
            src="media/images/education.svg"
            alt="Education"
            style={{ width: "80%" }}
          />
        </div>

        
        <div className="col-md-6">

          <h2 className="fw-bold mb-3">
            Free and open market education
          </h2>

          <p className="text-muted" style={{ lineHeight: "1.8" }}>
            Varsity, the largest online stock market education book in the
            world covering everything from the basics to advanced trading.
          </p>

          <p className="text-muted" style={{ lineHeight: "1.8" }}>
            Learn stock markets with structured lessons, quizzes, and
            real-world examples designed for beginners and professionals.
          </p>

          <div className="mt-3">

            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "#387ed1",
                fontWeight: "500",
                marginRight: "25px"
              }}
            >
              Varsity <i className="fa fa-arrow-right ms-1"></i>
            </a>

            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "#387ed1",
                fontWeight: "500"
              }}
            >
              Trading Q&A <i className="fa fa-arrow-right ms-1"></i>
            </a>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Education;
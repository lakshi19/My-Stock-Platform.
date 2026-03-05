import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5">
        
        <h1 className="fs-2 text-center">
          We pioneered the discount broking model in India. 
          Now we are breaking ground with our technology.
        </h1>

        <div className="row p-5 mt-5 border-top">
          
          <div className="col-md-6">
            <p>
              We kick-started operations on 15 August 2019 with the goal of 
              breaking all barriers that traders and investors face in India 
              in terms of cost, support, and technology.
            </p>
          </div>

          <div className="col-md-6">
            <p>
              We named the company Zerodha — a combination of Zero and 
              "Rodha" (Sanskrit for barrier) — to reflect our mission 
              of breaking all barriers in the industry.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Hero;
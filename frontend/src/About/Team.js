import React from "react";
import "../App.css";

function Team() {
  return (
    <div className="container team-section">

      
      <div className="row p-5 mb-5">
        <h1 className="fs-2 text-center">People</h1>
      </div>


      <div className="row align-items-center p-5">

        
        <div className="col-md-4 text-center">

          <img
            src="/media/images/second one.jpg"
            style={{ width: "180px", height: "180px", objectFit: "cover" }}
            alt="Lakshita"
            className="rounded-circle mb-3"
          />

          <h3>Lakshita</h3>
          <p className="text-muted">Founder & CEO</p>

        </div>

        
        <div className="col-md-8">

          <p className="text-muted">
            Lakshita is the founder and CEO of Zerodha. She started her
            career as a trader in the late 1990s and has over two decades of
            experience in the financial markets.
          </p>

          <p className="text-muted">
            In 2010, he co-founded Zerodha with the mission to remove barriers
            that traders and investors face in India in terms of cost,
            technology, and support.
          </p>

          <p className="text-muted">
            Under his leadership, Zerodha has grown into India's largest
            retail stockbroker and a leader in fintech innovation.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Team;
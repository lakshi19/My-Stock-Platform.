import React from "react";
function hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />

        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivation,mutual funds, and more
        </p>
        <button
          className="p-3 btn btn-success fs-5"
          style={{ width: "25%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}
export default hero;

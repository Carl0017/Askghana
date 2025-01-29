import React from "react";
import Navbar from "../../components/Navbar";
import "./Donation.scss";

function Donation() {
  return (
    <>
      <div className="donations">
        <div className="overlay"></div>
        <div className="content">
          <Navbar />
          <div>
            <h1>Donation</h1>
          </div>
          <div className="extra">
          <br></br>
        </div>
        </div>
      </div>

    <div className="paymentWrapper">
      <h3>
      How much would you like to donate? As a contributor to ASK Ghana we make sure your donation goes directly to supporting our cause.
      </h3>

      <form>
        <input type="number" placeholder="Enter An Amount" />
        <button>
          Continue
        </button>
      </form>

    </div>

    </>
  );
}

export default Donation;

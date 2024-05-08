import React from "react";
import Navbar from "../components/Navbar";
import "../assets/styles/Donation.scss";

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

      <form>
        
      </form>
    </>
  );
}

export default Donation;

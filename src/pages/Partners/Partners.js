import React from "react";
import "./PartnersPage.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Partners from "../../components/Partners";
function PartnersPage() {
  return (
    <>
      <div className="PartnersCon">
        <div className="overlay"></div>

        <div className="content">
          <Navbar />

          <div>
            <h1>Our Partners </h1>
          </div>

          <div className="extra">
            <br></br>
          </div>
        </div>
      </div>

      <div className="PartnersWrap">
        <p>
        We are proud to partner with a number of corporations and institutions that are committed to creating a better world for sustainable menstruation products. Together, we engage a global community of leaders, connect to share ideas, and work collectively to spearhead new initiatives, events, and tools for change. We welcome funding and in-kind gifts from our partners. Please contact us to start a conversation about working together.
        </p>

        <Partners />


      </div>
      
      <div className="partnessWrapSecond">
      <Footer />
      </div>
    </>
  );
}

export default PartnersPage;

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import "./Teams.scss";

import Sharon from "../../assets/images/teamImages/Sharon.png";
//import Anaa from "../../assets/images/teamImages/Anna.png";
//import Natasha from "../../assets/images/teamImages/Natasha.png";
import Rejoice from "../../assets/images/teamImages/Rejoice.png";
import rejoice from "../../assets/images/teamImages/rejoice.jpeg"
//import Priscilla from "../../assets/images/teamImages/Priscilla_Ab.png";

function Team() {
  return (
    <>
      <div className="TeamsCon">
        <div className="overlay"></div>

        <div className="content">
          <Navbar />

          <div>
            <h1>Our Team </h1>
          </div>

          <div className="extra">
            <br></br>
          </div>
        </div>
      </div>

      <div className="TeamsWrap">
        <div className="teamwraplist">
          <Card
            backgroundImage={Sharon}
            title="MS. KERZIAH SHARON ADJAGRAH"
            description="EXECUTIVE DIRECTOR"
          />
          <Card
            backgroundImage={Rejoice}
            title="MS. REJOICE LOIS BAKYE"
            description="DIR. COMMUNICATION"
          />
          <Card
            
            title="MRS. ANNA BELINDA BAIDOO"
            description="DIR. ADMINISTRATION"
          />
          <Card 
          //backgroundImage={}
          title="MS. BEATRICE FOBI" 
          description="PROJ. CORDINATOR" 
          />
          <Card
            title="MS. PRISCILLA ABENA"
            description="BUNDGET AND FINANCE CORDINATOR"
          />
          <Card
            title="MS. Bernice Fobi"
            description="MONITORING AND EVALUATION OFFICER"
          />
          <Card
            title="MS. PRINCESS MENSAH"
            description="DISABILITY PROJ CORDINATOR"
          />
          <Card
            title="MRS. NATASHA OSAFO - GYAMFI"
            description="COUNSELLING CORDINATOR"
          />
          <Card
            backgroundImage={rejoice}
            title="MS. Rejoice Manuela Adukw3i Quaye"
            description="LEAD – TEEN ADVISOR"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Team;

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Sample from '../assets/images/askGhanaa-logo.svg';
import '../assets/styles/Teams.scss';

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

      <Card
            backgroundImage={Sample}
            title="Name"
            description="Role"
          />
           <Card
            backgroundImage={Sample}
            title="Name"
            description="Role"
          />
           <Card
            backgroundImage={Sample}
            title="Name"
            description="Role"
          />

      </div>
      
      <Footer />
    
    </>
  );
}

export default Team;
import React from "react";

import "./App.scss";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ChevronRight, Clock, MapPin } from "lucide-react";

import thumbnail from "../../assets/images/event.jpg";


//campaign card 
function CampCard(props) {
  return(
    <>
      <div className="campCard">
        <div className="topSection" style={{ backgroundImage: `url(${props.imageUrl})` }}>
          <div className="dateCon">
            <Clock />
            <h3>
             {props.Time}
            </h3>
          </div>
        </div>

        <div className="middleSection">
          <h2>
           {props.Title}
          </h2>
          <p>
          Lorem Ipsum is simply dummy a of the printing and type setting industry Loreaim Ipsum has
          </p>

          <div className="locationDiv">
            <MapPin />
            <h3>
             {props.Location}
            </h3>
          </div>
        </div>

        <div className="bottomSection">
          <button>
            DONATE NOW

            <div className="iconWrapper">
              <ChevronRight />
            </div>
          </button>
        </div>

      </div>
    </>
  );
}

function App() {
  return (
    <>
      <div className="Campaigns">
        <div className="overlay"></div>

        <div className="content">
          <Navbar />

          <div>
            <h1>Campaigns</h1>
          </div>

          <div className="extra">
            <br></br>
          </div>
        </div>
      </div>

      <div className="campaignWrapper">
          <CampCard  imageUrl= {thumbnail} Time="20th Dec, 2024" Title="Special Needs" Location="Cape Coast, Accra"/>
          <CampCard  imageUrl= {thumbnail}  Time="1st May, 2025" Title="Donation Drive" Location="McCarthy Hill, Mallam" />
          <CampCard  imageUrl= {thumbnail}  Time="12th Dec, 2026" Title="Children Education" Location="Madina, Accra"/>
      </div>

    </>
  );
}

export default App;

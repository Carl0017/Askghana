import React from 'react'

import Navbar from "../../components/Navbar";
import "./App.scss";
import Footer from "../../components/Footer";

function App() {
  return (
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
  )
}

export default App
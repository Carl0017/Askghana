import React from 'react';
import { Link } from "react-router-dom";
import '../assets/styles/Card.scss';

const ProgramCards = ({ backgroundImage, title, description }) => {

  return (
    <div className="card">
      <div className="image" style={{backgroundImage: `url(${backgroundImage})`}}></div>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button className='navbrandBtn' >
        <Link to="./What-We-Do" style={{color: "#036803", textDecoration:"none"}}>See More</Link>
        </button>
      </div>
    </div>
  );
};

export default ProgramCards;
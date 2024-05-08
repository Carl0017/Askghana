import React from 'react';
import '../assets/styles/Card.scss';

const WedoCards = ({ backgroundImage, title, description }) => {

  return (
    <div className="card">
      <div className="image" style={{backgroundImage: `url(${backgroundImage})`}}></div>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WedoCards;
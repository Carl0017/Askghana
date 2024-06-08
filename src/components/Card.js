import React from 'react'
import '../assets/styles/teamCard.scss';
const Card = ({ backgroundImage, title, description }) => {

    return (
      <div className="Teamcard">
        <img src={backgroundImage} alt='' />
        <div className="content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  };

export default Card
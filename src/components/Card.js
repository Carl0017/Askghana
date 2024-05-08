import React from 'react'

const Card = ({ backgroundImage, title, description }) => {

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

export default Card
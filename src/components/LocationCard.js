import React from 'react';
import '../css_files/LocationCard.css'; // Adjusted path

const LocationCard = ({ location }) => {
  return (
    <div 
      className="location-card" 
      style={{ backgroundImage: `url(${location.backgroundImage})` }} // Set background image
    >
      <h4>{location.name}</h4>
      <p>{location.address}</p>
      <p>{location.description}</p>
    </div>
  );
};

export default LocationCard;

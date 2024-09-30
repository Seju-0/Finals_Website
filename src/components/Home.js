// Home.jsx
import React from 'react';
import '../css_files/Home.css'; // Adjusted path
import LocationCard from './LocationCard'; // Corrected import

import mainStoreImage from '../Images/Manila.jpg';
import subBranchBaguioImage from '../Images/Baguio.jpg';
import subBranchQuezonImage from '../Images/Quezon.jpg';
import subBranchMakatiImage from '../Images/Makati.jpg';

const locations = [
  { 
    name: 'Main Store', 
    address: 'Manila', 
    description: 'Inspired by the city’s dynamic lifestyle, we provide a relaxing space for busy professionals and students to unwind, recharge, and find those extra hours of comfort amidst the hustle.', 
    backgroundImage: mainStoreImage
  },
  { 
    name: 'Sub Branch', 
    address: 'Baguio', 
    description: 'Known for its serene landscapes and creative energy, Baguio offers the perfect backdrop for our café, where you can enjoy a warm cup of coffee while escaping the daily grind.', 
    backgroundImage: subBranchBaguioImage
  },
  { 
    name: 'Sub Branch', 
    address: 'Quezon', 
    description: 'Known for its vibrant neighborhoods and thriving community, Quezon City is the perfect place for us to provide a much-needed break in the heart of this bustling city.', 
    backgroundImage: subBranchQuezonImage
  },
  { 
    name: 'Sub Branch', 
    address: 'Makati', 
    description: 'As the heart of business and culture in Metro Manila, Makati is the ideal spot for busy professionals and creatives alike to find a moment of calm.', 
    backgroundImage: subBranchMakatiImage
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <h2>Extra Hours</h2>
      
      <div className="about-us">
        <h3>About Us</h3>
        <p>
          {/* About us content */}
        </p>
      </div>

      <div className="locations">
        <h3>Store Locations</h3>
        <div className="locations-container">
          {locations.map((location, index) => (
            <LocationCard key={index} location={location} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

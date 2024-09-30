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
    description: 'Manila, capital and chief city of the Philippines. The city is the centre of the country’s economic, political, social, and cultural activity.', 
    backgroundImage: mainStoreImage
  },
  { 
    name: 'Sub Branch', 
    address: 'Baguio', 
    description: 'Baguio City is a landlocked, highly urbanized city located in the island of Luzon and within the highlands of the Cordillera Ranges.', 
    backgroundImage: subBranchBaguioImage
  },
  { 
    name: 'Sub Branch', 
    address: 'Quezon', 
    description: 'Quezon City is known for its culture, entertainment industry and media, and is aptly called the "City of Stars".', 
    backgroundImage: subBranchQuezonImage
  },
  { 
    name: 'Sub Branch', 
    address: 'Makati', 
    description: 'Makati lies in the heart of big Metro Manila and is known for its upscale shopping malls home to high fashion brands', 
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

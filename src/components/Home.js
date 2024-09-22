import React from 'react';
import '../css_files/Home.css'; // Adjusted path
import LocationCard from './LocationCard'; // Corrected import

const locations = [

  { 
    name: 'Main Store', 
    address: 'Manila', 
    description: '8123-4567', 
    backgroundImage: 'https://i.pinimg.com/564x/ce/21/b4/ce21b432b241659ab1febe4902bee382.jpg' // Path to the background image
  },

  { 
    name: 'Main Store', 
    address: 'Baguio', 
    description: '+63 (0)74', 
    backgroundImage: 'https://i.pinimg.com/564x/4d/9a/fd/4d9afd1ad833ed52e7fbe83b5fe51a11.jpg' // Path to the background image
  },

  { 
    name: 'Main Store', 
    address: 'Quezon', 
    description: '+63 (0)42', 
    backgroundImage: 'https://i.pinimg.com/564x/e7/20/cc/e720cca11bc8c8d526b96cb43a46dffe.jpg' // Path to the background image
  },

  { 
    name: 'Main Store', 
    address: 'Makati', 
    description: '+63 (0)02', 
    backgroundImage: 'https://i.pinimg.com/564x/8c/90/d3/8c90d39f68265d441f594b7200248deb.jpg' // Path to the background image
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




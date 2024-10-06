import React from 'react';
import { Link } from 'react-router-dom';
import '../css_files/Merchandise.css';

const FeaturedMerchandise = () => {
  const featuredItems = [
    { id: 2, name: 'Neon Keyboard', price: '$120', imageUrl: '/images/keyboard.jpg', featured: true },
    { id: 3, name: 'Holo-Projector', price: '$300', imageUrl: '/images/projector.jpg', featured: true },
  ];

  return (
    <div className="merch-container">
      <div className="merch-overlay"></div>
      
      <h1 className="merch-title">Featured Merchandise</h1>

      <div className="merch-grid">
        {featuredItems.map(item => (
          <Link to={`/item/${item.id}`} key={item.id}>
            <div className="merch-item">
              <img src={item.imageUrl} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMerchandise;


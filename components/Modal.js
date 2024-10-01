// src/Modal.js

import React from 'react';
import '../css_files/Modal.css'; // Make sure to import your modal styles

const Modal = ({ item, isOpen, onClose, onConfirm, selectedSize, setSelectedSize }) => {
  if (!isOpen || !item) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{item.name}</h3>
        <img src={item.imageUrl} alt={item.name} />
        <p>{item.description}</p>
        <p>${item.price.toFixed(2)}</p>

        {item.category === 'Apparel' && (
          <div>
            <label htmlFor="size">Select Size:</label>
            <select id="size" value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
              <option value="">Select a size</option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">Extra Large</option>
              <option value="XXL">Double Extra Large</option>
            </select>
          </div>
        )}

        <div className="modal-actions">
          <button onClick={onConfirm} disabled={!selectedSize && item.category === 'Apparel'}>
            Add to Cart
          </button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
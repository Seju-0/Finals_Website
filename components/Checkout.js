// src/Checkout.js

import React, { useState } from 'react';
import '../css_files/Checkout.css';

const Checkout = ({ cartItems }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiration: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle payment processing logic.
    alert('Checkout successful!'); // Placeholder for success message
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <h2>Your Items</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Please add items before checking out.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="checkout-item">
                  <img src={item.imageUrl} alt={item.name} />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>Size: {item.size}</p>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
        </div>
      )}

      <h2>Shipping Information</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="zip"
          placeholder="ZIP Code"
          value={formData.zip}
          onChange={handleChange}
          required
        />
        
        <h2>Payment Information</h2>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={formData.cardNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="expiration"
          placeholder="MM/YY"
          value={formData.expiration}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={formData.cvv}
          onChange={handleChange}
          required
        />

        <button type="submit" className="checkout-button">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
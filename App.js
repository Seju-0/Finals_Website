import React, { useState, useEffect } from 'react';
import './css_files/App.css'; // Global styles
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/Navbar'; 
import Home from './components/Home';
import Register from './components/Register';
import Beverages from './components/Beverages';
import Pastries from './components/Pastries';
import Merchandise from './components/Merchandise';
import Cart from './components/Cart'; // Import Cart component
import Checkout from './components/Checkout'; // Import Checkout component

function App() {
  const [cartItems, setCartItems] = useState(() => {
    // Get cart items from local storage or set to an empty array
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  // Update local storage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        // If item already in cart, increase quantity
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      ).filter(item => item.quantity > 0); // Remove item if quantity is 0
      return updatedItems;
    });
  };

  return (
    <Router>
      <CustomNavbar />
      <div className="centered-container"> {/* Add this class */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/beverages" element={<Beverages />} />
          <Route path="/pastries" element={<Pastries />} />
          <Route path="/merchandise" element={<Merchandise addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


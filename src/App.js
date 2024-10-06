import React, { useState } from 'react';
import './css_files/App.css'; // Global styles
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Register from './components/Register';
import Beverages from './components/Beverages';
import Pastries from './components/Pastries';
import Merchandise from './components/Merchandise';
import ItemDetail from './components/ProductDetail';

const App = () => {
  const location = useLocation();
  const [glitch, setGlitch] = useState(false);

  const handleEnterCafeClick = () => {
    setGlitch(true);
    setTimeout(() => {
      setGlitch(false);
    }, 500); // Ensure this matches the animation duration
  };

  return (
    <div className={`app ${glitch ? 'glitch' : ''}`}>
      <CustomNavbar />
      <div className="centered-container">
        <Routes location={location}>
          <Route path="/" element={<Home onEnterCafeClick={handleEnterCafeClick} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/beverages" element={<Beverages />} />
          <Route path="/pastries" element={<Pastries />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/item/:id" element={<ItemDetail />} /> {/* Route for item detail */}
        </Routes>
      </div>
    </div>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;



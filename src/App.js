import React from 'react';
import './css_files/App.css';  // Global styles
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/Navbar'; 
import Home from './components/Home';
import Register from './components/Register';
import Beverages from './components/Beverages';
import Pastries from './components/Pastries';
import Merchandise from './components/Merchandise';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <div className="centered-container"> {/* Add this class */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/beverages" element={<Beverages />} />
          <Route path="/pastries" element={<Pastries />} />
          <Route path="/merchandise" element={<Merchandise />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


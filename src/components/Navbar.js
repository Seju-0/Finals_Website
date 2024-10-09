import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../css_files/Navbar.css'; // Ensure the correct import

const CustomNavbar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
        <Nav className="nav-left"> {/* Left-aligned links */}
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/beverages">Beverages</Nav.Link>
          <Nav.Link as={Link} to="/pastries">Pastries</Nav.Link>
          <Nav.Link as={Link} to="/merchandise">Merchandise</Nav.Link>
        </Nav>
        <Nav className="nav-right"> {/* Right-aligned link */}
          <Nav.Link as={Link} to="/login">Register</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;

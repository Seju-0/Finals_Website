import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../css_files/Navbar.css'; // Ensure the correct import

const CustomNavbar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto justify-content-center"> {/* Add justify-content-center */}
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
          <Nav.Link as={Link} to="/beverages">Beverages</Nav.Link>
          <Nav.Link as={Link} to="/pastries">Pastries</Nav.Link>
          <Nav.Link as={Link} to="/merchandise">Merchandise</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;

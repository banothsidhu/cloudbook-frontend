import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import '../App.css';

function NavbarComponent() {
  return (
    <>
      <nav className='Navbar'>
        <Navbar bg="white" expand="lg" fixed="top">
          <Nav className="m-auto">
            <NavLink className='nav-link'>
             Inotebook
            </NavLink>
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="mr-auto">
              <Nav.Item className="m-auto">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item className="m-auto">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </nav>
      <div style={{ paddingTop: "60px" }}>
        {/* Add padding equal to the navbar height */}
        {/* Content of the home component goes here */}
      </div>
    </>
  );
}

export default NavbarComponent;
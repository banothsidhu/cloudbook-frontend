import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import '../App.css';

function NavbarComponent() {
  return (
    <>
      <nav className='Navbar'>
        <Navbar bg="success" expand="lg" fixed="top" >
          <Nav className="m-auto">
            <NavLink className='titleName' style={{ color: '#f8f9fa' }}>
             Inotebook
            </NavLink>
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto">
              <Nav.Item className="m-auto">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item className="m-auto">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </Nav.Item>
              <Nav.Item className="m-auto">
                <NavLink to="/signup" className="nav-link">
                  SignUp
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </nav>
      <div style={{ paddingTop: "60px", color: "white" }}>
        {/* Add padding equal to the navbar height */}
        {/* Content of the home component goes here */}
      </div>
    </>
  );
}


export default NavbarComponent;
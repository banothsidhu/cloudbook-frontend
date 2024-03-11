import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function NavbarComponent() {
  const navigate = useNavigate() 
  const handleLogOut = () => {
    localStorage.removeItem('token')
    navigate('/login')
  };
  return (
    <>
      <nav className='Navbar'>
        <Navbar bg="success" expand="lg" fixed="top" >
          <Nav className="m-auto">
            <NavLink className='titleName' style={{ color: '#f8f9fa' }}>
              MyCloudBook
            </NavLink>
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto">
              
              {!localStorage.getItem('token') ? <>
              
                <Nav.Item className="m-auto">
                <NavLink to="/about" className="nav-link">
                  About Me
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
              </> : <>
                <Nav.Item className="m-auto">
                <NavLink to="/about" className="nav-link">
                  About Me
                </NavLink>
              </Nav.Item>
                <button id ="logoutbtn"onClick={handleLogOut} className="btn btn-danger mx-3 titleName">
                  Logout
                </button></>
              }
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

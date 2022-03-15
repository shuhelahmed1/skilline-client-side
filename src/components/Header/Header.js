import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import '../../img/Polygon 1.png';
import { NavHashLink } from 'react-router-hash-link';
const Header = () => {
    return (
        <div>
            <Navbar expand="md" collapseOnSelect style={{backgroundColor: "transparent"}} variant="dark">
    <Container>
    <Navbar.Brand href="/home"><span className='menu-icon'>Skilline</span></Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse>
    <Nav className="ms-auto">
      <Nav.Link as={Link} to="/home"><span className='menu-link'>Home</span></Nav.Link>
      <Nav.Link as={Link} to="/careers"><span className='menu-link'>Careers</span></Nav.Link>
      <Nav.Link as={Link} to="/blog"><span className='menu-link'>Blog</span></Nav.Link>
      <NavHashLink className='mt-2' as={Link} to="/home/#aboutus"><span className='menu-link'>About Us</span></NavHashLink>
      <Nav.Link as={Link} to="/login"><span className='login-link'>Login</span></Nav.Link>
      <Nav.Link as={Link} to="/signup"><span className=' signup-link'>Sign Up</span></Nav.Link>
     
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  
        </div>
    );
};

export default Header;
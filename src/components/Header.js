import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-0"> {/* Remove bottom margin */}
      <Container>
        <Navbar.Brand as={Link} to="/">
         Felix Lab
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#team">Our Team</Nav.Link>
            <Nav.Link href="#work">Research</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
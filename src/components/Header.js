import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-0">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Felix 2.0
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={HashLink} smooth to="/#about">About Us</Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#team">Our Team</Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#work">Research</Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
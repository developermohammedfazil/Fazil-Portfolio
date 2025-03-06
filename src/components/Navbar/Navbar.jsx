import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FiMenu, FiX } from "react-icons/fi";
import '../../App.css';

export default function Navigation() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar 
      bg="light" 
      expand="lg" 
      fixed="top" 
      expanded={expanded} 
      className="shadow py-3"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="fw-bold fs-3 text-primary"
        >
          FAZ
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
          className="navbar-toggler"
        >
          {expanded ? <FiX size={30} /> : <FiMenu size={30} />}
        </Navbar.Toggle>

        {/* Menu Items */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="nav-links">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>About</Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={() => setExpanded(false)}>Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Badge } from 'react-bootstrap';
import { FaHeart, FaShoppingCart, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

function Demoheader() {
  return (
    <Navbar bg="light" expand="lg" className="py-3">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            className="me-2"
          />
          Marketpro
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Category Dropdown */}
            <NavDropdown title="All Categories" id="categories-dropdown">
              <NavDropdown.Item href="#grocery">Grocery</NavDropdown.Item>
              {/* Add more categories as needed */}
            </NavDropdown>

            {/* Home and Shop dropdowns */}
            <NavDropdown title="Home" id="home-dropdown">
              <NavDropdown.Item href="#home">Home Option 1</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Shop" id="shop-dropdown">
              <NavDropdown.Item href="#shop">Shop Option 1</NavDropdown.Item>
            </NavDropdown>

            {/* Blog and Contact Us links */}
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>

          {/* Search bar */}
          <Form className="d-flex me-3">
            <FormControl
              type="search"
              placeholder="Search for a product or brand"
              className="me-2"
            />
            <Button variant="outline-success">
              <i className="bi bi-search"></i>
            </Button>
          </Form>

          {/* Location */}
          <Nav.Link href="#location" className="d-flex align-items-center">
            <FaMapMarkerAlt className="me-1" />
            <span>Your Location</span>
            <strong className="ms-1">Alabama</strong>
          </Nav.Link>

          {/* Wishlist and Cart */}
          <Nav.Link href="#wishlist" className="position-relative">
            <FaHeart />
            <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle">2</Badge>
          </Nav.Link>
          <Nav.Link href="#cart" className="position-relative">
            <FaShoppingCart />
            <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle">2</Badge>
          </Nav.Link>

          {/* Phone Number */}
          <Nav.Link href="tel:01234567890" className="d-flex align-items-center ms-3 text-success">
            <FaPhoneAlt className="me-2" />
            <span>01-234-567-890</span>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Demoheader;

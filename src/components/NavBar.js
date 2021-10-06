import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap"; //to use pre-styled navbars
import { Link } from "react-router-dom";
import "./NavBar.scss";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
const NavBar = () => {
  const [currentKey, setCurrentKey] = useState(1);
  const path = window.location.pathname; //to check on which page we are at.
  useEffect(() => {
    switch (path) {
      case "/about":
        setCurrentKey(2);
        break;

      default:
        setCurrentKey(1);
        break;
    }
  }, [path]);
  //useEffect runs once when the page loads and then it runs again only when a certain variable('path' here) changes.
  return (
    <Navbar
      bg="dark"
      variant="dark"
      style={{ padding: "10px", marginBottom: "20px" }}
    >
      <Navbar.Brand
        className="nav-left"
        as={Link}
        to="/"
        onClick={() => setCurrentKey(1)}
      >
        <h4 style={{ margin: 0 }}>Nistha Goel</h4>
      </Navbar.Brand>
      <NavbarCollapse className="justify-content-end">
        <Nav
          className="justify-content-end"
          activeKey={currentKey}
          onSelect={(selectedKey) => {
            setCurrentKey(selectedKey);
          }}
        >
          <Nav.Link as={Link} eventKey={1} to="/">
            Links
          </Nav.Link>
          <Nav.Link as={Link} eventKey={2} to="/about">
            About
          </Nav.Link>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
};
export default NavBar;

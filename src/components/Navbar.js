import React from "react";
import Nav from "react-bootstrap/Nav";

export default function Navbar(props) {
  const { setCurrentPage } = props;

  return (
    <Nav className="pages">

      <Nav.Link
        className="page"
        href="#about"
        onClick={() => {
          setCurrentPage("About");
        }}
      >
        About Me
      </Nav.Link>

      
      <Nav.Link
        className="page"
        href="#portfolio"
        onClick={() => {
          setCurrentPage("Portfolio");
        }}
      >
        Portfolio
      </Nav.Link>

      
      <Nav.Link
        className="page"
        href="#contact"
        onClick={() => {
          setCurrentPage("Contact");
        }}
      >
        Contacts
      </Nav.Link>

      
      <Nav.Link
        className="page"
        href="#resume"
        onClick={() => {
          setCurrentPage("Resume");
        }}
      >
        Resume
      </Nav.Link>
    </Nav>
  );
}
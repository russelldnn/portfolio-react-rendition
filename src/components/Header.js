import React from "react";
import Navi from "./Navbar";
import Navbar from "react-bootstrap/Navbar";

export default function Header(props) {
  return (
    <Navbar collapseOnSelect className="navbar" variant="dark" expand="sm" aria-current="true">
      <Navbar.Brand href="/portfolio-react-rendition" className="name">
        {" "}
        &lt;Russell Dunn/Home/&gt;
      </Navbar.Brand>
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className=" justify-content-end"
      >
        <Navi setCurrentPage={props.setCurrentPage}></Navi>
      </Navbar.Collapse>
    </Navbar>
  );
}
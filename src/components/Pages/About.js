import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import selfimage from "../../assets/images/selfimage.jpg";


export default function About() {
  return (
    <Container>
      <h2 className="title">About Me Section</h2>
      <Row>
        <Col md={5} lg={4} className="profile-div">
          <img src={selfimage} alt="profile" className="profile" />
        </Col>
        <Col md={7} lg={8} className="profile-div">
          <div className="description">
            <p>
              My name is Russell Dunn, I am Jamaican by birth, most of my youth was spent in the sciences and on hobbies such as photography. After gaining a bachelors in biology and a diploma in biotechnology and a small stint in medical school I have decided to take up coding.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
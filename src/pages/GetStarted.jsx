import React from "react";
import getStartedImage from "../../public/images/get-started.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function GetStarted() {
  return (
    <div>
      <div className="start-hero">
        <div className="image-overlay"></div>
        <img
          src={getStartedImage}
          alt="Get Started"
          className="get-started-image"
          style={{
            width: "100%",
            height: "75vh",
            objectPosition: "top",
          }}
        />
        <div className="hero-content">
          <Navbar
            collapseOnSelect
            expand="lg"
            className="p-2"
            style={{ background: "transparent" }}
          >
            <Container>
              <Navbar.Brand href="#home" style={{ color: "white" }}>
                <b>Anime.lib</b>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#features" style={{ color: "white" }}>
                    Features
                  </Nav.Link>
                  <Nav.Link href="#pricing" style={{ color: "white" }}>
                    Pricing
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

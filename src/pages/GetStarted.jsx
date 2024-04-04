import React from "react";
import getStartedImage from "../../public/images/get-started.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button, Form, Offcanvas } from "react-bootstrap";
import Spotlight from "../components/homePage/Spotlight";

export default function GetStarted() {
  return (
    <div>
      <div className="start-hero">
        <div className="image-overlay"></div>
        <Spotlight />
        <div className="hero-content">
          <Navbar
            key="lg"
            expand="lg"
            className="p-4"
            style={{ background: "transparent" }}
          >
            <Container fluid>
              <Navbar.Brand href="#" style={{ color: "white" }}>
                <b>Anime.lib </b>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                placement="end"
                style={{ background: "black", color: "white" }}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-lg`}
                    style={{ color: "white" }}
                  >
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-start flex-grow-1 pe-3">
                    <Nav.Link href="#action1" style={{ color: "white" }}>
                      Home
                    </Nav.Link>
                    <Nav.Link href="#action2" style={{ color: "white" }}>
                      Link
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
          <div className="hero-section">
            <div className="search-bar">
              <Form>
                <Form.Group style={{ display: "flex", gap: "20px" }}>
                  <Form.Control
                    size="lg"
                    type="text"
                    placeholder="Search for animes"
                    style={{ borderRadius: "10px" }}
                  />
                  <Button variant="outline-success">
                    <i
                      class="fa-brands fa-searchengin"
                      style={{ fontSize: "20px" }}
                    ></i>
                  </Button>
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

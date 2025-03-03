import "./styles.css";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Button,
  Card,
} from "react-bootstrap";

const App = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">Mi Sitio Web</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#about">Acerca</Nav.Link>
              <Nav.Link href="#contact">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row className="mb-4">
          <Col>
            <h1 className="text-center">Bienvenido a Mi Sitio Web</h1>
            <p className="text-center">
              Este es un sitio web simple usando React y Bootstrap.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Sección 1</Card.Title>
                <Card.Text>Descripción breve de la sección 1.</Card.Text>
                <Button variant="primary">Ver más</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Sección 2</Card.Title>
                <Card.Text>Descripción breve de la sección 2.</Card.Text>
                <Button variant="primary">Ver más</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Sección 3</Card.Title>
                <Card.Text>Descripción breve de la sección 3.</Card.Text>
                <Button variant="primary">Ver más</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;

import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Container className="vh-100 d-flex flex-column align-items-center justify-content-center bg-dark text-white">
      <h1 className="display-4 fw-bold text-center mb-4">Selecciona un perfil</h1>
      <Row className="gap-4">
        {/* Tarjeta de Alain */}
        <Col>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Card className="text-white bg-primary shadow-lg" style={{ width: "18rem" }}>
              <Card.Body className="text-center">
                <Card.Title className="h4 fw-semibold">Alain</Card.Title>
                <Link to="/alain" className="stretched-link"></Link>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>

        {/* Tarjeta de Checo */}
        <Col>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Card className="text-white bg-success shadow-lg" style={{ width: "18rem" }}>
              <Card.Body className="text-center">
                <Card.Title className="h4 fw-semibold">Checo</Card.Title>
                <Link to="/checo" className="stretched-link"></Link>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

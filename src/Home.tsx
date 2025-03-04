import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100 bg-dark text-white">
      <h1 className="display-4 fw-bold mb-4">Selecciona un perfil</h1>
      <div className="d-flex gap-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="card bg-primary text-white p-4 rounded shadow-lg cursor-pointer"
        >
          <Link to="/alain" className="text-white text-decoration-none">
            <h2 className="h4 fw-semibold">Alain</h2>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="card bg-success text-white p-4 rounded shadow-lg cursor-pointer"
        >
          <Link to="/checo" className="text-white text-decoration-none">
            <h2 className="h4 fw-semibold">Checo</h2>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;



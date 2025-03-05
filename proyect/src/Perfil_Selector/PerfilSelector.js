import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Perfil.css"; // Asegúrate de que este archivo exista

const PerfilSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid vh-100 d-flex flex-column align-items-center justify-content-center text-center">
      <div className="row mb-4">
        <div className="col-md-6 mb-4">
          <div className="card project-card" onClick={() => navigate('/Checo')}>
            <img src="https://th.bing.com/th/id/OIP.3FIeRehJQ0FxlxpL9N0pwwHaIV?w=155&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" className="card-img-top" alt="Proyecto Checo" />
            <div className="card-body">
              <h5 className="card-title">Proyecto Checo</h5>
              <p className="card-text">Explora el proyecto de Checo.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card project-card" onClick={() => navigate('/Alain')}>
            <img src="https://th.bing.com/th/id/OIP.WEby2vSpkOfBX6Di-qMA9wAAAA?w=151&h=167&c=7&r=0&o=5&dpr=1.5&pid=1.7" className="card-img-top" alt="Proyecto Alain" />
            <div className="card-body">
              <h5 className="card-title">Proyecto Alain</h5>
              <p className="card-text">Explora el proyecto de Alain.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilSelector;
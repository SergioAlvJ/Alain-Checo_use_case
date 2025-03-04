import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PerfilSelector = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="mb-4">Selecciona tu perfil</h1>
      <div className="row">
        <div className="col-md-6">
          <button className="btn btn-primary btn-lg w-100 mb-3">Checo</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-success btn-lg w-100">Alain</button>
        </div>
      </div>
    </div>
  );
};

export default PerfilSelector;

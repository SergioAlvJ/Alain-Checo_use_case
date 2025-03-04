import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // Importa el componente principal
import "bootstrap/dist/css/bootstrap.min.css"; // Importa Bootstrap
import "./styles.css"; // Importa estilos globales (si los tienes)

// Busca el elemento con id "root" en el HTML para montar la app
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

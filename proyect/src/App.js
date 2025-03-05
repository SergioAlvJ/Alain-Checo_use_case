import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PerfilSelector from "./Perfil_Selector/PerfilSelector";
import ChecoProfile from './Perfil_Selector/Checo/app'; 
import AlainProfile from './Perfil_Selector/Alain/app'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PerfilSelector />} />
        <Route path="/checo" element={<ChecoProfile />} />
        <Route path="/alain" element={<AlainProfile />} />
      </Routes>
    </Router>
  );
}

export default App;


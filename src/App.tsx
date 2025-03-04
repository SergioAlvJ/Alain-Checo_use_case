import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import ProfileAlain from "./profiles/Alain/Home";
import ProfileCheco from "./profiles/Checo/Home";
import ProfileSelector from "./components/profile_com";
import { Container, Alert } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeWithSelector />} />
        <Route path="/alain" element={<ProfileAlain />} />
        <Route path="/checo" element={<ProfileCheco />} />
      </Routes>
    </Router>
  );
}

function HomeWithSelector() {
  const navigate = useNavigate();
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);

  const handleSelectProfile = (profile: string) => {
    setSelectedProfile(profile);
    alert(`Has seleccionado: ${profile}`);
    navigate(`/${profile.toLowerCase()}`);
  };

  return (
    <Container className="mt-4">
      {selectedProfile ? (
        <Alert variant="success">Bienvenido, {selectedProfile}</Alert>
      ) : (
        <ProfileSelector onSelectProfile={handleSelectProfile} />
      )}
    </Container>
  );
}

export default App;
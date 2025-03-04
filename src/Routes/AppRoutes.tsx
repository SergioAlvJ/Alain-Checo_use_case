import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import ProfileAlain from "../profiles/Alain/Home";
import ProfileCheco from "../profiles/Checo/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/alain/*" element={<ProfileAlain />} />
      <Route path="/checo/*" element={<ProfileCheco />} />
    </Routes>
  );
}

export default AppRoutes;

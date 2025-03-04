import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

// Remove the second default export
// export default Home;


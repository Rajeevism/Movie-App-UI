import Header from "./components/header/Header.jsx";
import AppRoutes from "./routers/appRoutes.jsx";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;

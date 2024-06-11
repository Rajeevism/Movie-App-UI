import Header from "./components/Header";
import AppRoutes from './routers/appRoutes.jsx';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />
      <Router>
        <AppRoutes />
      </Router>
      {/*       
      <div className="header">
        <h2>Movies in Chennai</h2>
      </div>
      <ImageSlider /> */}
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Experiences from "./Components/Experiences";
import Formations from "./Components/Formations";
import Accueil from "./Components/Accueil";
import Navbar from "./Components/Navbar";
import Projets from "./Components/Projets";
import Footer from './Components/Footer';
import Certifes from './Components/Certifes';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/certifes" element={<Certifes />} />
      </Routes>
      <Footer/>
      </Router>
  );
}

export default App;
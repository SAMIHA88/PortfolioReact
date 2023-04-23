import "../Styles/main.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div>
      <img src="/images/moi.png" alt="Me" />
      <h1>Samiha ELHAJJAM </h1>
      <h3>-Elève Ingénieur-</h3>
        <nav>
          <Link to="/" className="nav-item">Accueil</Link>
          <Link to="/formations" className="nav-item">Formations</Link>
          <Link to="/experiences" className="nav-item">Expériences</Link>
          <Link to="/projets" className="nav-item">Projets</Link>
          <Link to="/certifes" className="nav-item">Certificats</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
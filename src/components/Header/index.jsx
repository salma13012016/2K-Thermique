import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header>
      <div className="logo">
        <Link to="/"><img src="/path/to/logo.png" alt="2K Thermique" /></Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À propos de nous</Link></li>
          <li><Link to="/contact">Contactez-nous</Link></li>
          <li><Link to="/legal">Mentions légales</Link></li>
        </ul>
      </nav>
    </header>
    );
}

export default Header;
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer>
          <span>
            2K Thermique
          </span>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À propos de nous</Link></li>
          <li><Link to="/contact">Contactez-nous</Link></li>
          <li><Link to="/legal">Mentions légales</Link></li>
        </ul>
        <span>&copy; 2024 2K Thermique Tous droits réservés</span>
      </nav>
    </footer>
    );
}

export default Footer;
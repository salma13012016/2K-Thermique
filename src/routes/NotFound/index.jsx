import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    useEffect(() => {
        document.title = "Erreur - 2K Thermique";
      }, []);
  return (
    <main>
      <h1>404 - Page non trouvée</h1>
      <p>La page que vous cherchez n'existe pas.</p>
      <Link to="/">Retour à l'accueil</Link>
    </main>
  );
};

export default NotFound;

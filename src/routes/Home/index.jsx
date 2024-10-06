import { useEffect } from "react";


const Home= () => {
    useEffect(() => {
        document.title = "Accueil - 2K Thermique";
      }, []);

    return (
        
        <main>
            <div>
            <section>
            <p>
            Bienvenue sur le site internet de la SAS 2K Thermique, 
            votre partenaire de confiance pour l'installation, 
            le dépannage et l'entretien de systèmes de chauffage,
             de climatisation et de pompes à chaleur. 
            Nous sommes basés en région Rhône-Alpes et 
            proposons nos services aux clients professionnels ainsi qu'aux particuliers.
            </p>
            </section>
            <section>
                <h1>
                    Situation Géographique
                </h1>
            </section>
           


            </div>
          
        </main>
    );
}

export default Home;
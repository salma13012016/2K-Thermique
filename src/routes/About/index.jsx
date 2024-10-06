import { useEffect } from "react";

const About= () => {
    useEffect(() => {
        document.title = "A propose de nous - 2K Thermique";
      }, []);
    return (
        <main>
            <div>
            <h1>
                2K Thermique
            </h1>
            <p>
            Votre partenaire de confiance en Rhône-Alpes pour l'installation, 
            le dépannage et l'entretien de systèmes de chauffage, 
            climatisation et pompes à chaleur. 
            </p>
            </div>
            
            <div>
            <h2>
                Nos services
            </h2>
            <p>
             Découvrez notre vaste gamme de services professionnels. Nous mettons constamment cette page à jour,
             mais si vous ne trouvez toujours pas ce que vous cherchez, n'hésitez pas à nous contacter. 
             Nous serons heureux de vous aider.
            </p>
            </div>

            <section>
                <div>
                <img src="" alt="" />
                <h3>
                    Installation de chaudières
                </h3>
                <p>
                Notre équipe qualifiée assure l'installation professionnelle de chaudières à gaz, 
                électrique et fioul. 
                Faites confiance à notre expertise pour un système de chauffage sûr et performant. 
                </p>
                </div>

                <div>
                <img src="" alt="" />
                <h3>
                    Installation de pompes à chaleur
                </h3>
                <p>
                Optez pour une solution écologique et économique avec les pompes à chaleur. 
                Nous installons des modèles air-air, air-eau et géothermiques, 
                adaptés à vos besoins énergétiques.
                </p>
                </div>

                <div>
                <img src="" alt="" />
                <h3>
                     Installation de climatisation
                </h3>
                <p>
                 Profitez d'un confort optimal en été avec nos systèmes de climatisation. 
                 Choisissez parmi les gammes de climatisation réversible,
                 un système multi-split ou une climatisation par gainable, pour un environnement frais et agréable. 
                </p>
                </div>

                <div>
                <img src="" alt="" />
                <h3>
                    Dépannage rapide
                </h3>
                <p>
                En cas de panne ou de dysfonctionnement, urgence ou non, 
                notre équipe d'intervention rapide est là pour vous. 
                Nous diagnostiquons et réparons vos équipements de chauffage, 
                climatisation et pompes à chaleur avec efficacité même les jours non ouvrables ! 
                </p>
                </div>

                <div>
                <img src="" alt="" />
                <h3>
                   Votre satisfaction est notre priorité
                </h3>
                <p>
                Nous mettons un point d'honneur à vous offrir un service client personnalisé. 
                Nous écoutons attentivement vos besoins et nous nous assurons de vous fournir des solutions fiables, 
                durables et qui répondent à vos attentes. 
                </p>
                </div>

                <div>
                <img src="" alt="" />
                <h3>
                   Clients particuliers et professionnels
                </h3>
                <p>
                Que vous soyez un particulier ou un professionnel, nous sommes là pour répondre à vos besoins.
                 Confiez-nous vos projets de chauffage, climatisation et pompes à chaleur, et bénéficiez de notre expertise. 
                </p>
                </div>
            </section>
          
        </main>
    );
}

export default About;
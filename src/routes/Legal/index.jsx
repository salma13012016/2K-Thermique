import { useEffect } from "react";

const Legal= () => {
    useEffect(() => {
        document.title = "Mentions Légales - 2K Thermique";
      }, []);

    return (
        <main>
            <h1>
                Mentions Légales
            </h1>

            <div>
            <h2>
                Siège social
            </h2>
            <p> 2K Thermique</p>
            <address>
                593 Route de Manissol <br /> <br />
                Genilac, 42800
            </address>
            </div>

            <div>
            <h2>Contact</h2>
            <a href="mailto:contact@2kthermique.fr">contact@2kthermique.fr</a>
            </div>

            <div>
            <h2>Représentant Légal</h2>
            <p> Adem KHELEF - Président</p>
            <p> Kamel KHELEF - Directeur Général</p>
            </div>

            <div>
            <h2>Immatriculation</h2>
            <p>Numéro de SIRET : 94785909600010</p>
            <p>Numéro RCS : Saint-Etienne B 947 859 096</p>
            </div>

            <div>
            <h2>Numéro de TVA intracommunautaire</h2>
            <p>Numéro de TVA intracommunautaire : FR87947859096</p>
            </div>
             
        </main>
    );
}

export default Legal;
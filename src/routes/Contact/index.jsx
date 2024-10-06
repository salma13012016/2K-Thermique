import ContactForm from "../../components/ContactForm";
import { useEffect } from "react";

const Contact= () => {
    useEffect(() => {
        document.title = "Contact - 2K Thermique";
      }, []);

    return (
        <main>
            <div>
            <h1>
                Contactez-nous
            </h1>
            <p>
            Pour des demandes de devis, 
            veuillez envoyer le plan de projet ainsi que sa nature à l'e-mail suivant.   
            </p>
            <a href="mailto:contact@2kthermique.fr">contact@2kthermique.fr</a>
            </div>

           <div>
           <ContactForm />
           </div>
            
        </main>
    );
}

export default Contact;
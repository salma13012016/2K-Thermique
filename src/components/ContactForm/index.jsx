import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import InputField from "../InputField";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    tel: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);
  const form = useRef(); // Créer une référence pour le formulaire

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.nom) formErrors.nom = "Le nom est obligatoire";
    if (!formData.prenom) formErrors.prenom = "Le prénom est obligatoire";
    if (!formData.email) formErrors.email = "L'email est obligatoire";
    if (!formData.tel) formErrors.tel = "Le téléphone est obligatoire";
    if (!formData.message) formErrors.message = "Le message est obligatoire";
    if (!formData.consent)
      formErrors.consent = "Le consentement est obligatoire";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      // Si pas d'erreurs, on envoie le formulaire via EmailJS
      emailjs
        .sendForm(
          "service_e9thwro", // Remplace par ton ID de service EmailJS
          "template_x3ot427", // Remplace par ton ID de modèle EmailJS
          form.current, // Utilisation de la référence du formulaire
          "C1TPEyNx6SmKC2AWw" // Ton publicKey EmailJS
        )
        .then(
          (result) => {
            console.log("Email envoyé:", result.text);
            setIsSent(true);
          },
          (error) => {
            console.error("Erreur lors de l'envoi :", error.text);
          }
        );
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <InputField
        label="Nom"
        name="nom"
        value={formData.nom}
        onChange={handleChange}
        error={errors.nom}
      />
      <InputField
        label="Prénom"
        name="prenom"
        value={formData.prenom}
        onChange={handleChange}
        error={errors.prenom}
      />
      <InputField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        type="email"
      />
      <InputField
        label="Téléphone"
        name="tel"
        value={formData.tel}
        onChange={handleChange}
        error={errors.tel}
        type="tel"
      />
      <div>
        <label htmlFor="message">Message*</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
      </div>

      <div>
        <label htmlFor="consent">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
          />
          J'accepte que ces données soient stockées et traitées dans le but
          d'établir un contact. Je suis conscient(e) que je peux révoquer mon
          consentement à tout moment.*
        </label>
        {errors.consent && <p style={{ color: "red" }}>{errors.consent}</p>}
      </div>

      <button type="submit">Envoyer</button>

      {isSent && <p style={{ color: "green" }}>Message envoyé avec succès !</p>}
    </form>
  );
};

export default ContactForm;
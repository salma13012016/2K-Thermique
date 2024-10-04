import  { useState } from "react";

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
      // Si pas d'erreurs, on peut soumettre le formulaire
      console.log("Formulaire soumis : ", formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nom">Nom*</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />
        {errors.nom && <p style={{ color: "red" }}>{errors.nom}</p>}
      </div>

      <div>
        <label htmlFor="prenom">Prénom*</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
          required
        />
        {errors.prenom && <p style={{ color: "red" }}>{errors.prenom}</p>}
      </div>

      <div>
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="tel">Téléphone*</label>
        <input
          type="tel"
          id="tel"
          name="tel"
          value={formData.tel}
          onChange={handleChange}
          pattern="[0-9]{8,15}"
          required
        />
        {errors.tel && <p style={{ color: "red" }}>{errors.tel}</p>}
      </div>

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
          d'établir un contact. Je suis conscient que je peux révoquer mon
          consentement à tout moment.*
        </label>
        {errors.consent && <p style={{ color: "red" }}>{errors.consent}</p>}
      </div>

      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactForm;
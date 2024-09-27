import { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";
import dance from "../assets/toothless-dancing.gif";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ekpuu0q",
        "template_84khplm",
        formData,
        "a2280qQ_08GJVikrV"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Tu mensaje ha sido enviado correctamente!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Failed to send message. Error:", err);
        alert("Fallo el envio del mensaje, intenta mas tarde porfavor.");
      });
  };

  return (
    <section className="contact">
      <div className="contact-content">
        <h2>Contactame</h2>
        <p>
          Estare atento al mensaje que quieras dejarme, sientete libre de
          enviarlo con el formulario que tienes aqui. <br />{" "}
          ------&gt;&gt;&gt;
        </p>
        <img src={dance} alt="dragoncito" className="img-drake" />
      </div>

      <div className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Correo"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn-primary">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

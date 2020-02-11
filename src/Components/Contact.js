import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Message" />
      </form>
    </section>
  );
};

export default Contact;

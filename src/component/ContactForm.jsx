// ContactForm.jsx
import React from "react";
import "./ContactForm.css";

const ContactForm = ({ onClose }) => {
  return (
    <div className="contact-form-overlay">
      <div className="contact-form-container">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Start Your Free Demo</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="email" placeholder="Whatsapp Number" required />
          <input type="email" placeholder="Country" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

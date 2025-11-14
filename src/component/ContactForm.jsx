import React, { useState } from "react";
import "./ContactForm.css";
import axios from "axios";

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    country: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/leads/submit", formData);
      alert("Lead Saved Successfully!");
      console.log(res.data);
      onClose();
    } catch (error) {
      alert("Error saving lead!");
      console.log(error);
    }
  };

  return (
    <div className="contact-form-overlay">
      <div className="contact-form-container">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>

        <h2>Start Your Free Demo</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            placeholder="Whatsapp Number"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            placeholder="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

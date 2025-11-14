import React, { useState } from "react";
import axios from "axios";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/leads/submit", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      setStatus("Message sent successfully!");

      // Clear form after submit
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Error sending message");
    }
  };

  return (
    <div className="contact-container">
      
      {/* LEFT SIDE */}
      <div className="contact-left">
        <p className="help-text">WE’RE HERE TO HELP YOU</p>

        <h1 className="main-heading">
          Discuss Your <br /> Trading & Forex Needs
        </h1>

        <p className="description">
          Have questions about our forex solutions, platforms, or services?
          Get in touch — our expert team is ready to guide you.
        </p>

        <div className="contact-info">
          <p className="label">E-mail: support@forexpediaa.com</p>
          <p className="label">Website: www.forexpediaa.com</p>
        </div>
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>CONTACT US</h3>

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Whatsapp Number"
            className="form-input"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Type your message"
            className="form-textarea"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn">
            Send Message
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

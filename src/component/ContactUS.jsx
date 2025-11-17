import React, { useState } from "react";
import axios from "axios";
import "./ContactUs.css";
import { FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [savedPhone, setSavedPhone] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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

      setSavedPhone(formData.phone);
      setSubmitted(true);

    } catch (error) {
      console.error(error);
      alert("Error sending message");
    }
  };

  return (
    <div className="contact-container">

      {/* ---------- LEFT SIDE ---------- */}
      <div className="contact-left">
        <p className="help-text">WE’RE HERE TO HELP YOU</p>

        {/* Dynamic Heading */}
        <h1 className="main-heading">
          {submitted ? (
            <>
              Thank You for <br /> Reaching Out!
            </>
          ) : (
            <>
              Discuss Your <br /> Trading & Forex Needs
            </>
          )}
        </h1>

        {/* Dynamic Subtext */}
        <p className="description">
          {submitted
            ? "Connect with our team directly."
            : "Have questions about our forex solutions, platforms, or services? Get in touch — our expert team is ready to guide you."}
        </p>

        {/* Contact Details */}
        <div className="contact-info">
          <p className="label">E-mail: support@forexpediaa.com</p>
          <p className="label">Website: www.forexpediaa.com</p>
        </div>
      </div>

      {/* ---------- RIGHT SIDE ---------- */}
      <div className="contact-right">

        {!submitted ? (
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
          </form>
        ) : (
          <div className="thank-you-box">

            <h2 className="thank-title">Your message has been submitted!</h2>

            <p className="thank-sub">We will contact you shortly.</p>

            {/* WhatsApp Button Under Thank You */}
            {savedPhone.trim() !== "" && (
              <a
                href={`https://wa.me/${savedPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="thank-whatsapp-btn"
              >
                <FaWhatsapp className="wa-icon" />
                Chat on WhatsApp
              </a>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default ContactUs;

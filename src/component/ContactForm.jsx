import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css";
import { FaWhatsapp } from "react-icons/fa";

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    customCode: "",
    whatsapp: "",
  });

  const [savedWhatsapp, setSavedWhatsapp] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const countryCodes = ["+1", "+44", "+61", "+91", "+971", "Other"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalCode =
      formData.countryCode === "Other"
        ? formData.customCode
        : formData.countryCode;

    try {
      await axios.post("http://localhost:5000/api/leads/submit", {
        ...formData,
        countryCode: finalCode,
      });

      setSavedWhatsapp(formData.whatsapp);
      setSubmitted(true);
    } catch (error) {
      alert("Error sending message!");
      console.log(error);
    }
  };

  return (
    <div className="contact-overlay">
      <div className="contact-popup">

        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>

        {/* HEADER — NOW DYNAMIC */}
        <h2 className="popup-title">
          {submitted ? "Thank You for Reaching Out!" : "Get in Touch With Us Today"}
        </h2>

        <p className="popup-subtitle">
          {submitted
            ? "Connect with our team directly."
            : "Fill out your details and our team will contact you shortly."}
        </p>

        {/* SUCCESS SCREEN */}
        {submitted ? (
          <div className="success-box">
            {/* Show WhatsApp button only if number entered */}
            {savedWhatsapp.trim() !== "" && (
              <a
                href={`https://wa.me/${savedWhatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <FaWhatsapp size={18} />
                Chat on WhatsApp
              </a>
            )}
          </div>
        ) : (
          /* FORM SCREEN */
          <form className="form-card" onSubmit={handleSubmit}>

            {/* Name */}
            <div className="floating-label">
              <label className="input-heading">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="floating-label">
              <label className="input-heading">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Country Code */}
            <div className="floating-label">
              <label className="input-heading">Country Code</label>
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
              >
                {countryCodes.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Custom Code */}
            {formData.countryCode === "Other" && (
              <div className="floating-label">
                <label className="input-heading">Custom Code</label>
                <input
                  type="text"
                  name="customCode"
                  placeholder="Enter country code"
                  value={formData.customCode}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {/* WhatsApp */}
            <div className="floating-label">
              <label className="input-heading">WhatsApp Number</label>
              <input
                type="text"
                name="whatsapp"
                placeholder="Enter your whatsapp number"
                value={formData.whatsapp}
                onChange={handleChange}
              />
            </div>

            {/* Submit */}
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;

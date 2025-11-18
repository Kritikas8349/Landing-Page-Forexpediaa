import React, { useState } from "react";
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalCode =
      formData.countryCode === "Other"
        ? formData.customCode
        : formData.countryCode;

    // Google Apps Script Web App URL
    const webAppURL =
      "https://script.google.com/macros/s/AKfycbyrfWUSk_v6nSso-JIXuJ3FQGpXbK6iWbvA9jZeUOUiIqgg52mVhxGV0NYSCjBh7_kQVw/exec";

    // Send data via fetch (no-cors to bypass localhost CORS issue)
    fetch(webAppURL, {
      method: "POST",
      mode: "no-cors", // Important for localhost testing
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        countryCode: finalCode,
        whatsapp: formData.whatsapp,
      }),
    });

    // Optimistically show success screen
    setSavedWhatsapp(finalCode + formData.whatsapp);
    setSubmitted(true);
  };

  return (
    <div className="contact-overlay">
      <div className="contact-popup">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>

        <h2 className="popup-title">
          {submitted ? (
            "Thank You for Reaching Out!"
          ) : (
            <>
              Unlock Your <span className="highlight1">5-Day Free</span> Trial Now!
            </>
          )}
        </h2>

        <p className="popup-subtitle">
          {submitted
            ? "Connect with our team directly."
            : "You’re One Click Away from Experiencing It Free for 5 Days!"}
        </p>

        {submitted ? (
          <div className="success-box">
            {savedWhatsapp.trim() !== "" && (
              <a
                href={`https://api.whatsapp.com/send?phone=${savedWhatsapp}`}
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
          <form className="form-card" onSubmit={handleSubmit}>
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

            <div className="floating-label">
              <label className="input-heading">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="row-flex">
              <div className="floating-label country-code">
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

              <div className="floating-label whatsapp-number">
                <label className="input-heading">WhatsApp No.</label>
                <input
                  type="text"
                  name="whatsapp"
                  placeholder="Enter your WhatsApp number"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

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

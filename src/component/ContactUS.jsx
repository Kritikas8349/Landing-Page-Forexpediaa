import React, { useState } from "react";
import "./ContactUs.css";
import { FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    customCode: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [savedPhone, setSavedPhone] = useState("");

  const countryCodes = ["+1", "+44", "+61", "+91", "+971", "Other"];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalCode =
      formData.countryCode === "Other"
        ? formData.customCode
        : formData.countryCode;

    // Your Google Apps Script Web App URL pointing to Sheet2
    const webAppURL =
      "https://script.google.com/macros/s/AKfycbwh42sIgmXcOppexBllwg8M9QvMOzOfU776w189PTGMFHeIOnNN4NOY_BLAYD4TDNZyrg/exec";

    // Send data via fetch
    fetch(webAppURL, {
      method: "POST",
      mode: "no-cors", // Avoid CORS issues
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        countryCode: finalCode,
        whatsapp: formData.phone,
        message: formData.message,
      }),
    });

    // Optimistically show success
    setSavedPhone(finalCode + formData.phone);
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <p className="help-text">WE’RE HERE TO HELP YOU</p>
        <h1 className="main-heading">
          {submitted ? (
            <>Thank You for <br /> Reaching Out!</>
          ) : (
            <>Discuss Your <br /> Trading & Forex Needs</>
          )}
        </h1>

        <p className="description">
          {submitted
            ? ""
            : "Have questions about our forex solutions, platforms, or services? Get in touch — our expert team is ready to guide you."}
        </p>

        <div className="contact-info">
          <p className="label">E-mail: support@forexpediaa.com</p>
          <p className="label">Website: www.forexpediaa.com</p>
        </div>
      </div>

      <div className="contact-right">
        {!submitted ? (
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>CONTACT US</h3>

            {/* Name Field */}
            <div className="floating-label">
              <label className="input-heading">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Field */}
            <div className="floating-label">
              <label className="input-heading">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Country Code + Phone Row */}
            <div className="row-flex">
              <div className="floating-label country-code">
                <label className="input-heading">Country Code</label>
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="input-select"
                >
                  {countryCodes.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="floating-label phone-number">
                <label className="input-heading">WhatsApp No.</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your WhatsApp number"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Custom Code */}
            {formData.countryCode === "Other" && (
              <div className="floating-label">
                <label className="input-heading">Custom Code</label>
                <input
                  type="text"
                  name="customCode"
                  placeholder="Enter country code"
                  className="form-input"
                  value={formData.customCode}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {/* Message */}
            <div className="floating-label">
              <label className="input-heading">Message</label>
              <textarea
                name="message"
                placeholder="Type your message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        ) : (
          <div className="thank-you-box">
            <h2 className="thank-title">Your message has been submitted!</h2>
            <p className="thank-sub">Connect with our team directly.</p>

            <a
              href={`https://api.whatsapp.com/send?phone=${savedPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="thank-whatsapp-btn"
            >
              <FaWhatsapp className="wa-icon" />
              Chat on WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;

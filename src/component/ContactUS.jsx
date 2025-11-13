import React, { useState } from "react";
import { MdEmail, MdPhone } from "react-icons/md"; // ✅ React Icons
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Your WhatsApp number (country code, no "+" or spaces)
    const phoneNumber = ""; // change this to your WhatsApp number

    // ✅ Construct WhatsApp message
    const textMessage = `Hello, I’m ${formData.name} (${formData.email}).
My contact number is ${formData.phone}.
Message: ${formData.message}`;

    // ✅ Open WhatsApp chat
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      textMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <p className="help-text">WE’RE HERE TO HELP YOU</p>
        <h1 className="main-heading">
        Discuss Your <br /> Trading & Forex Needs
        </h1>
        <p className="description">
        Have questions about our forex solutions, platforms, or services?
    Get in touch — our expert team is ready to guide you toward smart,
    secure, and profitable trading decisions.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            
            <div>
              <p className="label">E-mail: support@forexpediaa.com</p>
              <p className="label">Website: www.forexpediaa.com</p>
              <p className="label"> Follow us: Facebook | Instagram | LinkedIn | Twitter | YouTube</p>
            </div>
          </div>
        </div>
      </div>

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

          {/* ✅ Phone number input */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (with country code)"
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
      </div>
    </div>
  );
};

export default ContactUs;

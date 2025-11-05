import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram} from "react-icons/fa";
import { FiMail, FiGlobe } from "react-icons/fi";
import "./Footer.css";


const Footer = () => {
  return (
    <footer className="fp-footer">
      <div className="fp-top">
        <div className="fp-logo-wrap">
          <img src="FPlogo.png" alt="Forexpediaa" className="fp-logo" />
        </div>

        <div className="fp-social">
          <a href="#" aria-label="twitter" className="fp-social-icon"><FaTwitter /></a>
          <a href="#" aria-label="facebook" className="fp-social-icon"><FaFacebookF /></a>
          <a href="#" aria-label="instagram" className="fp-social-icon"><FaInstagram /></a>
        </div>

        <div className="fp-links-line">
          <nav className="fp-nav">
            <a href="#">Follow us:   Facebook</a>
            <span>|</span>
            <a href="#">Twitter</a>
            <span>|</span>
            <a href="#">LinkedIn</a>
            <span>|</span>
            <a href="#">Instagram</a>
            <span>|</span>
            <a href="#">YouTube</a>
          </nav>

          <nav className="fp-subnav">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms &amp; Conditions</a>
            <span>|</span>
            <a href="#">Risk Disclaimer</a>
          </nav>
        </div>
      </div>

      <div className="fp-contact-row">
        <div className="fp-contact-left">
          <a className="fp-contact-link" href="mailto:support@forexpediaa.com">
            <FiMail className="fp-contact-icon" /> support@forexpediaa.com
          </a>
        </div>
        <div className="fp-contact-right">
          <a className="fp-contact-link" href="https://www.forexpediaa.com" target="_blank" rel="noreferrer">
            <FiGlobe className="fp-contact-icon" /> www.forexpediaa.com
          </a>
        </div>
      </div>

      <div className="fp-sep" />

      <div className="fp-bottom">
        <div className="fp-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Condition</a>
        </div>

        <div className="fp-disclaimer">
          <p>
            Disclaimer: Trading in forex and commodities (comex) involves significant risk of loss and is not suitable for all investors. Past performance is not indicative of future results. Ensure you fully understand the risks and seek independent financial advice if necessary. Trading leveraged products may amplify gains and losses.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

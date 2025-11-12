import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter, // For the X (Twitter) icon
} from "react-icons/fa6";
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
          <a href="https://x.com/ForexPediaa" aria-label="x-twitter" className="fp-social-icon">
            <FaXTwitter />
          </a>
          <a href="https://www.facebook.com/people/Forexpediaa/61570471215586/?mibextid=wwXIfr" aria-label="facebook" className="fp-social-icon">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/forexpediaa_official/?igsh=ZTlhaDljY3A2MHk2#" aria-label="instagram" className="fp-social-icon">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@forexpediaa" aria-label="youtube" className="fp-social-icon">
            <FaYoutube />
          </a>
          <a href="https://www.linkedin.com/company/105704301/admin/dashboard/" aria-label="linkedin" className="fp-social-icon">
            <FaLinkedinIn />
          </a>
        </div>

        <div className="fp-links-line">
          <nav className="fp-nav">
            <a href="https://www.facebook.com/people/Forexpediaa/61570471215586/?mibextid=wwXIfr">Follow us:   Facebook</a>
            <span>|</span>
            <a href="https://www.linkedin.com/company/105704301/admin/dashboard/">LinkedIn</a>
            <span>|</span>
            <a href="https://www.instagram.com/forexpediaa_official/?igsh=ZTlhaDljY3A2MHk2#">Instagram</a>
            <span>|</span>
            <a href="https://www.youtube.com/@forexpediaa">YouTube</a>
          </nav>

          <nav className="fp-subnav">
            <a href="/privacy-policy">Privacy Policy</a>
            <span>|</span>
            <a href="/terms-conditions">Terms &amp; Conditions</a>
            <span>|</span>
            <a href="#">Risk Disclaimer</a>
          </nav>
        </div>
      </div>

      <div className="fp-contact-row">
        <div className="fp-contact-left">
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=support@forexpediaa.com"
  target="_blank"
  rel="noreferrer"
  className="fp-contact-link"
>
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
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-conditions">Terms and Condition</a>
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

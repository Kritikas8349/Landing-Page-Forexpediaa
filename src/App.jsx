import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarForex from './component/NavbarForex';
import ForexpediaaHero from './component/ForexpediaaHero';
import Footer from './component/Footer';
import AboutUs from './component/AboutUs';
import PrivacyPolicy from './component/PrivacyPolicy';
import TermsConditions from './component/TermsConditions';
import ContactUs from './component/ContactUS';
import ScrollToTop from './component/ScrollToTop';
import ContactForm from './component/ContactForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
     
      <NavbarForex />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<ForexpediaaHero />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions/>} />
        <Route path="/contact-form" element={<ContactForm/>} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

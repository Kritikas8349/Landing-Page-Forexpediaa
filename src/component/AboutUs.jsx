import React, { useState } from "react";
import "./AboutUs.css";
import { BsCheckCircleFill, BsLightningChargeFill, BsBarChartFill, BsPeopleFill } from "react-icons/bs";
import ContactForm from "./ContactForm";

const AboutUs = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className="aboutus-page">
      {/* ====== HERO SECTION ====== */}
      <section className="about-hero">
        <img src="FPlanding.png" alt="About Forexpediaa" className="about-hero-bg" />
        <div className="about-overlay"></div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Forexpediaa</h1>
          <p className="about-hero-subtitle">
            Empowering Traders with Certified Insights and Transparent Expertise
          </p>
        </div>
      </section>

      {/* ====== MAIN CONTENT ====== */}
      <section className="about-content">
        <div className="about-container">
          {/* Intro with image */}
          <div className="about-intro-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <p className="about-intro">
              At <span>Forexpediaa</span>, we believe every trader — beginner or
              professional — deserves access to accurate and transparent insights
              grounded in real financial knowledge. Founded with a mission to
              simplify global trading decisions, Forexpediaa combines{" "}
              <b>data science, financial analysis,</b> and{" "}
              <b>trading psychology</b> to help clients trade smarter, not harder.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="about-section">
            <h2>Our Vision</h2>
            <img src="vision.avif" alt="Vision"  />
            <p>
              To redefine forex education and account management through
              certified research, risk discipline, and absolute transparency —
              empowering traders to grow with clarity and confidence.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <img src="new3.avif" alt="Mission"  />
            <ul>
              <li>Real-time, risk-managed signals</li>
              <li>
                Market insights driven by FOMC, macroeconomic data, and global
                trends
              </li>
              <li>
                Strategic portfolio management across Forex, Commodities, Crypto
                & Indices
              </li>
            </ul>
          </div>

          {/* Core Values */}
          <div className="about-section">
            <h2>Our Core Values</h2>
            <img src="values.webp" alt="Core Values" />
            <div className="values-grid">
              <div className="value-card">
                <h3><BsCheckCircleFill className="value-icon" /> Integrity Above All</h3>
                <p>
                  We never promise guaranteed profits. Instead, we provide
                  honest data, clear strategies, and full transparency so you
                  can make informed decisions.
                </p>
              </div>
              <div className="value-card">
                <h3><BsLightningChargeFill className="value-icon" /> Certified Expertise</h3>
                <p>
                  Our analysts are trained under CFA, FRM, and CMT standards,
                  ensuring disciplined, research-based insights.
                </p>
              </div>
              <div className="value-card">
                <h3><BsBarChartFill className="value-icon" /> Data-Driven Analysis</h3>
                <p>
                  Every recommendation is powered by technical and fundamental
                  data — tracking global trends and monetary policy shifts.
                </p>
              </div>
              <div className="value-card">
                <h3><BsPeopleFill className="value-icon" /> Client-First Approach</h3>
                <p>
                  Your trust is our priority — from confidential consultations
                  to secure account handling, ethics and reliability guide us.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose */}
          <div className="about-section">
            <h2>Why Traders Choose Forexpediaa</h2>
            
            <ul className="why-list">
              <li>Certified Analysts with financial credentials</li>
              <li>Transparent Signals with clear SL/TP</li>
              <li>FOMC-informed strategy and global coverage</li>
              <li>Education-driven support for smarter trading</li>
            </ul>
          </div>

          {/* Approach */}
          <div className="about-section">
            <h2>Our Approach</h2>
            
            <p>
              We merge technical precision with economic intelligence to help
              traders navigate volatile markets confidently. Our analysts decode
              major financial events — from central bank decisions to
              geopolitical trends — translating complex data into simple,
              actionable insights.
            </p>
          </div>

          {/* CTA */}
          <div className="about-cta">
            <h2>Join the Forexpediaa Experience</h2>
            <p>
              Whether you’re starting your trading journey or managing a
              portfolio, <br />Forexpediaa gives you the tools and insights to succeed.
            </p>
            <button className="hero-btn1" onClick={openForm}>Claim 5 Days Trail</button>
          </div>
        </div>
      </section>

      {isFormOpen && <ContactForm onClose={closeForm} />}
    </div>
  );
};

export default AboutUs;

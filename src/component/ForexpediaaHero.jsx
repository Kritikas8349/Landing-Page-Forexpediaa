import React, { useState } from "react";
import "./ForexpediaaHero.css";
import { FaChevronDown } from "react-icons/fa";


const ForexpediaaHero = () => {
const [openIndex, setOpenIndex] = useState(null);

const toggleFAQ = (index) => {
setOpenIndex(openIndex === index ? null : index);
};

return (
<div>

<section className="hero-section">
  <img src="/FPlanding.png" alt="Trading Background" className="hero-bg-img" />
  <div className="hero-overlay"></div>

  <div className="hero-content">
    <h1 className="hero-heading">
      Trading & Forex Experts <br /> <span>for Financial Growth</span>
    </h1>
    <p className="hero-subtext">
      Trade confidently with analysts who understand global markets, FOMC <br />
      policy shifts, and real trading behavior. <br />
      We turn data into opportunity with professional-grade precision.
    </p>
    <button className="hero-btn">Claim Your Free Trial Access</button>
  </div>
</section>




<section className="offer-section">
<h2 className="offer-heading">What we offer</h2>
<div className="offer-cards-container">
<div className="offer-card">
<div className="offer-header">
  <img src="/fp1.png" alt="Certified Analysts" className="offer-icon" />
  <h3 className="offer-title">Certified & Experienced Analysts</h3>
</div>
<p className="offer-text">
Our team includes professionals trained under CFA (Chartered Financial Analyst) and FRM (Financial Risk Manager) standards — experts in global economics, risk, and valuation.
</p>
</div>

<div className="offer-card">
<div className="offer-header">
  <img src="/fp2.png" alt="Technical Mastery" className="offer-icon" />
  <h3 className="offer-title">Technical Mastery with CMT Principles</h3>
</div>
<p className="offer-text">
We follow Chartered Market Technician (CMT) methodologies to identify market patterns, timing, and trend reversals with precision.

</p>
</div>

<div className="offer-card">
<div className="offer-header">
  <img src="/fp3.png" alt="All-in-One Platform" className="offer-icon" />
  <h3 className="offer-title">All-in-One Platform</h3>
</div>
<p className="offer-text">
From Forex and Comex to Crypto and Indices, we bring all key markets together with actionable insights and portfolio management.


</p>
</div>

<div className="offer-card">
<div className="offer-header">
  <img src="/fp4.png" alt="FOMC Approach" className="offer-icon" />
  <h3 className="offer-title">FOMC-Informed Market Approach</h3>
</div>
<p className="offer-text">
Our analysis incorporates FOMC meeting insights — understanding how U.S. monetary policy drives global currency movements.


</p>
</div>
</div>
</section>




<section className="howitworks-section">
<h2 className="howitworks-title">How it works</h2>

<div className="howitworks-container">

  
  <div className="howitworks-card">
    <div className="number-circle">1</div>
    <img src="img1.png" alt="Join the Experience" className="howitworks-img" />
    <div className="howitworks-text">
      <h3>Join the Experience</h3>
      <p>
        Start your free trial and access real market insights guided by
        certified professionals.
      </p>
    </div>
  </div>

  
  <div className="howitworks-card">
    <div className="number-circle">2</div>
    <img src="img2.png" alt="Learn from Data-Driven Analysis" className="howitworks-img" />
    <div className="howitworks-text">
      <h3>Learn from Data-Driven Analysis</h3>
      <p>
        Our analysts interpret market movements, central bank updates
        (like FOMC), and global trends — so you can trade with clarity.
      </p>
    </div>
  </div>

  
  <div className="howitworks-card">
    <div className="number-circle">3</div>
    <img src="img3.png" alt="Trade Smarter, Not Harder" className="howitworks-img" />
    <div className="howitworks-text">
      <h3>Trade Smarter, Not Harder</h3>
      <p>
        Apply structured strategies built from professional frameworks and
        proven methods.
      </p>
    </div>
  </div>
</div>

<img src="earth.png" alt="earth" className="earth-img" />
</section>



<section className="feedback-section">
<h1 className="feedback-title">Traders Feedback</h1>
<h3 className="feedback-subtitle">
Traders turned consistent stories that matter
</h3>
<p className="feedback-rating">
Excellent - <span className="stars">★★★★★</span>
</p>

<div className="feedback-container">

<div className="feedback-card card-small">
<p className="stars">★★★★★ <span className="verified">✔ verified</span></p>
<h4>Omar A., Abu Dhabi</h4>
<p>
“Forexpediaa’s insights actually teach you what drives the market — not just signals but the reasons behind them.”
</p>
</div>

<div className="feedback-card card-medium">
<p className="stars">★★★★★ <span className="verified">✔ verified</span></p>
<h4>Sophie L., London</h4>
<p>
“Their approach feels professional. You can tell it’s backed by people who’ve studied markets deeply — not random calls.”
</p>
</div>

<div className="feedback-card card-large">
<p className="stars">★★★★★ <span className="verified">✔ verified</span></p>
<h4>Elena K., Athens</h4>
<p>
“The analytics are spot-on. I’ve compared their insights with live market trends, and they’re consistently reliable. What stands out is how they break down complex data into understandable insights — it’s not just numbers but real explanations of why the market moves. I’ve grown far more confident in my own strategies because of their clear, evidence-based approach.”
</p>
</div>


<div className="feedback-card card-large">
<p className="stars">★★★★★ <span className="verified">✔ verified</span></p>
<h4>Daniel W., Toronto</h4>
<p>
“I used to trade emotionally, jumping in and out of positions without a real plan. Forexpediaa completely changed that. Their data-driven approach and clear explanations helped me understand market behavior and timing. Now, I trade with patience, strategy, and confidence — and my results have improved drastically.”
</p>
</div>

<div className="feedback-card card-medium">
<p className="stars">★★★★★ <span className="verified">✔ verified</span></p>
<h4>Fatima R., Dubai</h4>
<p>
“The dashboard and reports feel like something institutional traders would use. Super impressed.”
</p>
</div>

<div className="feedback-card card-medium">
<p className="stars">★★★★★ <span className="verified">✔ verified</span></p>
<h4>Khalid H., Bahrain</h4>
<p>
“Before Forexpediaa, I was overwhelmed by complex charts and jargon. Their explanations made technical analysis actually make sense. I can finally identify trends confidently and make smarter trading decisions.”
</p>
</div>


<div className="feedback-card card-small">
<p className="stars">★★★★★ <span className="verified">✔ verified</span></p>
<h4>David M., USA</h4>
<p>
“The live insights and economic breakdowns on Forexpediaa helped me understand why markets move, not just when. That perspective made me more consistent and disciplined in my trades.”
</p>
</div>

<div className="feedback-card card-large">
<p className="stars">★★★★★ <span className="verified">✔ verified</span></p>
<h4>Ahmed R., Dubai</h4>
<p>
“I subscribed to the premium plan thinking I’d just get daily updates — but what I got was a full education. Forexpediaa’s structured content and market reports are miles ahead of free Telegram channels.”
</p>
</div>

<div className="feedback-card card-small">
<p className="stars">★★★★★ <span className="verified">✔ verified</span></p>
<h4>Noah T., New York</h4>
<p>
“From currency correlations to macroeconomic news, Forexpediaa covers everything. It’s not just a signal site — it’s a proper learning platform for serious traders.”
</p>
</div>
</div>
</section>



<section className="faq-section">
<h2 className="faq-title">Have Questions?</h2>

<div className="faq-layout">
  
  <div className="faq-vertical-line"></div>

  <div className="faq-container">
    
    <div
      className={`faq-item ${openIndex === 0 ? "active" : ""}`}
      onClick={() => toggleFAQ(0)}
    >
      <div className="faq-question">
        <span>What does “Certified Analysts” mean?</span>
        <FaChevronDown
          className={`arrow ${openIndex === 0 ? "rotate" : ""}`}
        />
      </div>
      <div
        className={`faq-answer-wrapper ${
          openIndex === 0 ? "open" : "closed"
        }`}
      >
        <p className="faq-answer">
        Our experts hold professional designations like CFA, CMT, and FRM, ensuring every analysis follows real financial standards — not guesswork.
        </p>
      </div>
    </div>

    
    <div
      className={`faq-item ${openIndex === 1 ? "active" : ""}`}
      onClick={() => toggleFAQ(1)}
    >
      <div className="faq-question">
        <span>What is FOMC and why does it matter?</span>
        <FaChevronDown
          className={`arrow ${openIndex === 1 ? "rotate" : ""}`}
        />
      </div>
      <div
        className={`faq-answer-wrapper ${
          openIndex === 1 ? "open" : "closed"
        }`}
      >
        <p className="faq-answer">
        The Federal Open Market Committee (FOMC) sets U.S. interest rate policy, which impacts global currencies. We monitor its meetings closely to anticipate market shifts.
        </p>
      </div>
    </div>

    
    <div
      className={`faq-item ${openIndex === 2 ? "active" : ""}`}
      onClick={() => toggleFAQ(2)}
    >
      <div className="faq-question">
        <span>Is there a cost for your services?</span>
        <FaChevronDown
          className={`arrow ${openIndex === 2 ? "rotate" : ""}`}
        />
      </div>
      <div
        className={`faq-answer-wrapper ${
          openIndex === 2 ? "open" : "closed"
        }`}
      >
        <p className="faq-answer">
        We provide a free trial for all new users. After that, our experts will guide you through available options.

        </p>
      </div>
    </div>

    
    <div
      className={`faq-item ${openIndex === 3 ? "active" : ""}`}
      onClick={() => toggleFAQ(3)}
    >
      <div className="faq-question">
        <span>Do I need experience to start?</span>
        <FaChevronDown
          className={`arrow ${openIndex === 3 ? "rotate" : ""}`}
        />
      </div>
      <div
        className={`faq-answer-wrapper ${
          openIndex === 3 ? "open" : "closed"
        }`}
      >
        <p className="faq-answer">
        No — we simplify complex market insights into actionable steps anyone can follow.
        </p>
      </div>
    </div>
  </div>
</div>


<img src="map.png" alt="World Map" className="faq-map" />
</section>


<section className="certified-section">
<div className="certified-card">
  <div className="circle circle-left"></div>
  <div className="circle circle-right"></div>

  <h2 className="certified-heading">
    Experience Certified Trading Insights <br /> Backed by Real Expertise
  </h2>
  <p className="certified-text">
    Trade with confidence, guided by certified analysts and global market data. <br />
    Start your journey with our free trial today.
  </p>
  <button className="certified-btn">Start My Free Trial</button>
</div>
</section>


</div>
);
};

export default ForexpediaaHero;

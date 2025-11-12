import React, { useState } from "react";
import "./ForexpediaaHero.css";
import { FaChevronDown } from "react-icons/fa";
import {
  FaRegThumbsUp,
  FaShare,
  FaRegFlag,
  FaChevronLeft,
  FaCircle,
  FaBars,
} from "react-icons/fa";



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




<section className="how-section">
      {/* Left Section */}
      <div className="how-left">
        <h2 className="how-title">How it works</h2>

        <div className="how-card oval1">
          <img src="forex1.png" alt="Join Experience" className="how-img" />
          <div>
            <h3>Join the Experience</h3>
            <p>
              Start your free trial and access real market insights guided by
              certified professionals.
            </p>
          </div>
        </div>

        <div className="how-card">
          <img src="forex2.png" alt="Data Analysis" className="how-img" />
          <div>
            <h3>Learn from Data-Driven Analysis</h3>
            <p>
              Our analysts interpret market movements, central bank updates
              (like FOMC), and global trends — so you can trade with clarity.
            </p>
          </div>
        </div>

        <div className="how-card oval">
          <img src="forex3.png" alt="Trade Smarter" className="how-img" />
          <div>
            <h3>Trade Smarter, Not Harder</h3>
            <p>
              Apply structured strategies built from professional frameworks and
              proven methods.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Phone */}
      <div className="how-right">
        <div className="phone-frame">
          {/* Top Camera Circle */}
          <div className="phone-camera"></div>

          <h3 className="testimonials-title">Testimonials</h3>

          <div className="testimonials-scroll">
            {/* Review 1 */}
            <div className="testimonial">
              <div className="review-header">
                <div className="user-info">
                  <img src="ss4.png" alt="User" className="user-img" />
                  <div>
                    <h4>Saboor Ahmad Yousufi</h4>
                    <p className="country">US · 1 review</p>
                  </div>
                </div>
                <span className="date">Jul 26, 2025</span>
              </div>
              <p className="review-title">Awesome customer service</p>
              <p className="review-text">Awesome customer service</p>

              <div className="review-footer">
                <span>
                  <FaRegThumbsUp /> Useful
                </span>
                <span>
                  <FaShare /> Share
                </span>
                <span>
                  <FaRegFlag /> Report
                </span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="testimonial">
              <div className="review-header">
                <div className="user-info">
                  <img src="ss3.png" alt="User" className="user-img" />
                  <div>
                    <h4>Abdul Khaliq</h4>
                    <p className="country">KW · 1 review</p>
                  </div>
                </div>
                <span className="date">Jul 25, 2025</span>
              </div>
              <p className="review-title">Hi siya</p>
              <p className="review-text">
                I like your tracking analysis. It is very good.
              </p>

              <div className="review-footer">
                <span>
                  <FaRegThumbsUp /> Useful
                </span>
                <span>
                  <FaShare /> Share
                </span>
                <span>
                  <FaRegFlag /> Report
                </span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="testimonial">
              <div className="review-header">
                <div className="user-info">
                  <img src="ss2.png" alt="User" className="user-img" />
                  <div>
                    <h4>Greg Coles Epic Drummer</h4>
                    <p className="country">GB · 2 reviews</p>
                  </div>
                </div>
                <span className="date">Aug 04, 2025</span>
              </div>
              <p className="review-title">
                Sanjana was very helpful and honest.
              </p>
              <p className="review-text">
                Sanjana was very helpful and honest.
              </p>

              <div className="review-footer">
                <span>
                  <FaRegThumbsUp /> Useful
                </span>
                <span>
                  <FaShare /> Share
                </span>
                <span>
                  <FaRegFlag /> Report
                </span>
              </div>
            </div>

            {/* Review 4 */}
            <div className="testimonial">
              <div className="review-header">
                <div className="user-info">
                  <img src="ss1.png" alt="User" className="user-img" />
                  <div>
                    <h4>Zahir Shahl</h4>
                    <p className="country">AE · 4 reviews</p>
                  </div>
                </div>
                <span className="date">Jul 31, 2025</span>
              </div>
              <p className="review-title">
                It's trusted and good for trading signal
              </p>
              <p className="review-text">
                I work with Mr. Shravan and he provides good signals. I highly
                recommend Mr. Shravan and Forexpediaa for signals.
              </p>

              <div className="review-footer">
                <span>
                  <FaRegThumbsUp /> Useful
                </span>
                <span>
                  <FaShare /> Share
                </span>
                <span>
                  <FaRegFlag /> Report
                </span>
              </div>
            </div>

            {/* Review 5 */}
            <div className="testimonial">
              <div className="review-header">
                <div className="user-info">
                  <img src="ss.png" alt="User" className="user-img" />
                  <div>
                    <h4>Sureshbhai Tandel</h4>
                    <p className="country">AE · 2 reviews</p>
                  </div>
                </div>
                <span className="date">Jul 26, 2025</span>
              </div>
              <p className="review-title">
                I have great experience with Forexpedia...
              </p>
              <p className="review-text">
                They provide good service and proper follow-up. Miss Gracy has
                been very supportive.
              </p>

              <div className="review-footer">
                <span>
                  <FaRegThumbsUp /> Useful
                </span>
                <span>
                  <FaShare /> Share
                </span>
                <span>
                  <FaRegFlag /> Report
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Phone Buttons */}
          <div className="phone-buttons">
            <FaChevronLeft className="phone-icon" />
            <FaCircle className="phone-icon" />
            <FaBars className="phone-icon" />
          </div>
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

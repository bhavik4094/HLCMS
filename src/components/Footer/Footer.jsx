import React from "react";
import "../../assets/css/footer.css";
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube, FaEnvelope, FaPhone } from "react-icons/fa6";
import BrandLogo from "../../assets/img/db.webp";
import paypalLogo from "../../assets/img/Payment-icon.png";

function Footer({ footerMenu }) {
  return (
    <>
      <footer className="footer-container">
        <div className="container">
          <div className="row">
              <div className="subscription-section">
              <h3 className="text-uppercase fw-bold">Stay Up to Date</h3>
              <div className="subscription-form">
                <input type="email" placeholder="Enter Your Email" className="subscribe-input" />
                <button className="subscribe-btn">Subscribe Now</button>
              </div>
            </div>
            <div className="footer-content">
              <ul className="footer-nav">
                {footerMenu.map((item) => (
                    <li key={item.label}><a href={item.url}>{item.label}</a></li>
                ))}
              </ul>
              <div className="footer-logo">
                <img src={BrandLogo} alt="Berg Bat Logo" />
              </div>
              <div className="footer-contact">
                <div className="social-icons">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaXTwitter /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><FaYoutube /></a>
                </div>
                <p>305 E Woodmen Rd,<br />Colorado Springs, CO 80919</p>
                <p><FaEnvelope /> trevor@bergbat.com</p>
                <p><FaPhone /> 719-203-9100</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© 2025 Berg Bat Company | All Rights Reserved. Powered By CWS.</p>
              <div className="payment-methods">
                <img src={paypalLogo} alt="PayPal" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

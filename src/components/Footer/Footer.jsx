import React from "react";
import "../../assets/css/footer.css";
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube, FaEnvelope, FaPhone } from "react-icons/fa6";
import BrandLogo from "../../assets/img/db.webp";
import paypalLogo from "../../assets/img/Payment-icon.png";

function Footer() {
  return (
    <footer className="footer-container">
      {/* Subscription Section */}
      <div className="subscription-section">
        <h3 className="text-uppercase fw-bold">Stay Up to Date</h3>
        <div className="subscription-form">
          <input type="email" placeholder="Enter Your Email" className="subscribe-input" />
          <button className="subscribe-btn">Subscribe Now</button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        {/* Left - Navigation Links */}
        <ul className="footer-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Abpout</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>

        {/* Center - Brand Logo */}
        <div className="footer-logo">
          <img src={BrandLogo} alt="Berg Bat Logo" />
        </div>

        {/* Right - Contact Info & Social Icons */}
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

      {/* Bottom Section - Copyright & Payment Methods */}
      <div className="footer-bottom">
        <p>© 2025 Berg Bat Company | All Rights Reserved. Powered By CWS.</p>
        <div className="payment-methods">
          <img src={paypalLogo} alt="PayPal" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

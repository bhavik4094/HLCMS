import React from "react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaEnvelope } from "react-icons/fa6";
import paypalLogo from "../../assets/img/Payment-icon.png";

function Footer({ footerMenu, footerImg, copyrightTxt }) {
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
                <img src={footerImg} alt="Berg Bat Logo" />
              </div>
              <div className="footer-contact">
                <div className="social-icons">
                  <a target="_blank" href="https://www.facebook.com/delanobats/"><FaFacebookF /></a>
                  <a target="_blank" href="https://www.instagram.com/delanobatco/"><FaInstagram /></a>
                  <a target="_blank" href="https://x.com/i/flow/login?redirect_after_login=%2FDelanoBats"><FaXTwitter /></a>
                </div>
                <p>Delano Bat Company, LLC <br />4435 Farmington Ave SE <br />Delano, MN 55328</p>
                <p><FaEnvelope /> sales@delanobats.com</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p class="font-roboto">{copyrightTxt}</p>
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

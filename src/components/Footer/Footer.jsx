import React from "react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaEnvelope } from "react-icons/fa6";
import paypalLogo from "../../assets/img/Payment-icon.png";
import { Link } from "react-router-dom";

function Footer({ footerMenu, footerData }) {
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
                    <li key={item.label}><Link to={item.url}>{item.label}</Link></li>
                ))}
              </ul>
              <div className="footer-logo">
                <Link to="/"><img src={footerData.footer_logo} alt="Berg Bat Logo" /></Link>
              </div>  
              <div className="footer-contact">
                <div className="social-icons">
                  {/* <a target="_blank" href={footerData.social_link_facebook}><FaFacebookF /></a>
                  <a target="_blank" href={footerData.social_link_instagram}><FaInstagram /></a>
                  <a target="_blank" href={footerData.social_link_x}><FaXTwitter /></a> */}
                  {footerData.social_link_facebook && (
                    <a target="_blank" rel="noopener noreferrer" href={footerData.social_link_facebook}>
                      <FaFacebookF />
                    </a>
                  )}
                  {footerData.social_link_instagram && (
                    <a target="_blank" rel="noopener noreferrer" href={footerData.social_link_instagram}>
                      <FaInstagram />
                    </a>
                  )}
                  {footerData.social_link_x && (
                    <a target="_blank" rel="noopener noreferrer" href={footerData.social_link_x}>
                      <FaXTwitter />
                    </a>
                  )}
                </div>
                <p>{footerData.address_line_1} <br />{footerData.address_line_2} <br />{footerData.address_line_3} </p>
                <p><a href={`mailto:${footerData.email}`}><FaEnvelope /> {footerData.email}</a></p>
              </div>
            </div>
            <div className="footer-bottom">
              <p className="font-roboto">{footerData.copyright_label}</p>
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

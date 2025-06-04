import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import "./Footer.css"; 

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
      
      {/* Company Info */}
      <div className="footer-section">
        <h2>ShopEase</h2>
        <p>Your one-stop shop for the best deals on top brands. Shop smart, shop easy!</p>
      </div>

      {/* Quick Links */}
      <div className="footer-section">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      {/* Contact & Social Media */}
      <div className="footer-section">
        <h2>Contact Us</h2>
        <p>Email: opv162002@gmail.com</p>
        <p>Phone: 7067763502</p>
        <div className="social-icons">
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaTwitter className="icon" />
        </div>
      </div>

    </div>

    {/* Payment Methods */}
    <div className="footer-bottom">
      <p>We Accept</p>
      <div className="payment-icons">
        <FaCcVisa className="icon" />
        <FaCcMastercard className="icon" />
        <FaCcPaypal className="icon" />
      </div>
      <p>© 2025 ShopEase. All Rights Reserved.</p>
    </div>
  </footer>
  )
}

export default Footer

import React from 'react';
import { FaFacebook, FaTiktok, FaViber, FaTelegram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Chantharzay. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          <a href="https://viber.com" target="_blank" rel="noopener noreferrer"><FaViber /></a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

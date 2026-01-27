import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaTiktok, FaViber, FaTelegram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{t('footer_copyright')}</p>
        <div className="footer-links">
          <a href="/privacy-policy">{t('privacy_policy')}</a>
          <a href="/terms-of-service">{t('terms_of_service')}</a>
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

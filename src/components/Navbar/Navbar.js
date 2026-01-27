import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import logo from '../../logo.png';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/"><img src={logo} alt="Chantharzay Logo" /></Link>
        </div>
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>{t('home')}</Link></li>
          <li><Link to="/company" onClick={toggleMenu}>{t('company')}</Link></li>
          <li><Link to="/healthcare-solutions" onClick={toggleMenu}>{t('healthcare_solutions')}</Link></li>
          <li><Link to="/mobile-applications" onClick={toggleMenu}>{t('mobile_applications')}</Link></li>
          <li><Link to="/technology" onClick={toggleMenu}>{t('technology')}</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>{t('contact')}</Link></li>
        </ul>
        <div className="navbar-controls">
          <LanguageSwitcher />
          <div className="menu-icon" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

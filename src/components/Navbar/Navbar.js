import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../0-02-06-008db08d9db3ee1fbea10e00b70014f2fd0391597ef3fb136936bd8b187ef493_750542ca0474a1f2.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={logo} alt="Chantharzay Logo" /></Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/company" onClick={toggleMenu}>Company</Link></li>
        <li><Link to="/healthcare-solutions" onClick={toggleMenu}>Healthcare Solutions</Link></li>
        <li><Link to="/mobile-applications" onClick={toggleMenu}>Mobile Applications</Link></li>
        <li><Link to="/technology" onClick={toggleMenu}>Technology</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

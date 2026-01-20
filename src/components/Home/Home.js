import React from 'react';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaUsers, FaHeartbeat } from 'react-icons/fa';
import './Home.css';
import '../Card/Card.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Pioneering the Future of Digital Health</h1>
        <p>Innovative, reliable, and user-centric digital solutions for the modern healthcare industry.</p>
        <Link to="/contact" className="cta-button">Get in Touch</Link>
      </header>
      <section className="home-section">
        <h2>Our Healthcare Ecosystem</h2>
        <div className="home-cards">
          <div className="card">
            <h3>Healthcare Solutions</h3>
            <p>We build scalable solutions for Web, iOS, and Android platforms, focusing on enhancing clinical efficiency and patient engagement.</p>
            <Link to="/healthcare-solutions">Learn More</Link>
          </div>
          <div className="card">
            <h3>Mobile Applications</h3>
            <p>Custom mobile applications tailored to your organization's specific needs, from patient portals to clinical trial management systems.</p>
            <Link to="/mobile-applications">Learn More</Link>
          </div>
          <div className="card">
            <h3>Our Technology</h3>
            <p>Leveraging the latest technologies to create secure, scalable, and intuitive healthcare applications that put users first.</p>
            <Link to="/technology">Learn More</Link>
          </div>
        </div>
      </section>
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature-item">
            <FaLightbulb className="feature-icon" />
            <h3>Innovative Solutions</h3>
            <p>We are committed to continuous innovation, staying at the forefront of technology to solve real-world healthcare challenges.</p>
          </div>
          <div className="feature-item">
            <FaUsers className="feature-icon" />
            <h3>User-Centric Design</h3>
            <p>Our solutions are designed with the user in mind, ensuring an intuitive and seamless experience for both patients and providers.</p>
          </div>
          <div className="feature-item">
            <FaHeartbeat className="feature-icon" />
            <h3>Healthcare Focused</h3>
            <p>With a deep understanding of the medical industry, we create solutions that are not only technologically advanced but also clinically relevant.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

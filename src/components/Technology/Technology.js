import React from 'react';
import { FaCogs, FaServer, FaShieldAlt } from 'react-icons/fa';
import Header from '../Header/Header';
import '../Page/Page.css';
import './Technology.css';
import '../Card/Card.css';

const Technology = () => {
  return (
    <div className="technology-container">
      <Header title="Technology & Integrated Overview" />
      <div className="page-container">
        <div className="page-content">
          <div className="card tech-card">
            <FaCogs className="tech-icon" />
            <h3>Modern Technology Stack</h3>
            <p>Our platform is built on a robust, modern technology stack, ensuring scalability, security, and reliability. We leverage the best of cloud computing, mobile technologies, and data analytics to deliver cutting-edge healthcare solutions.</p>
          </div>
          <div className="card tech-card">
            <FaServer className="tech-icon" />
            <h3>Scalability & Reliability</h3>
            <p>Our infrastructure is designed to scale with your needs, ensuring high availability and performance. We use a microservices architecture to ensure that our systems are resilient, maintainable, and ready for future growth.</p>
          </div>
          <div className="card tech-card">
            <FaShieldAlt className="tech-icon" />
            <h3>Security & Compliance</h3>
            <p>We take security and compliance seriously. Our platform is HIPAA compliant, and we follow industry best practices to protect patient data. We use end-to-end encryption, strict access controls, and regular security audits.</p>
          </div>
        </div>
        <div className="technology-philosophy">
          <h2>Our Technology Philosophy</h2>
          <p>We believe in a technology-forward approach that is agile, iterative, and always centered on the user. Our engineering principles are founded on building systems that are not only powerful and efficient but also intuitive and accessible. By embracing open standards and a collaborative development process, we create future-proof solutions that can adapt to the ever-evolving landscape of healthcare technology, ensuring long-term value for our partners and their patients.</p>
        </div>
      </div>
    </div>
  );
};

export default Technology;

import React from 'react';
import { FaRegHospital, FaLightbulb, FaShieldAlt, FaBullseye } from 'react-icons/fa';
import Header from '../Header/Header';
import '../Page/Page.css';
import './Company.css';
import '../Card/Card.css';

const Company = () => {
  return (
    <div className="company-container">
      <Header title="About Chantharzay" subtitle="Driving the future of healthcare through technology and compassion." />
      <div className="page-container">
        <div className="page-content">
          <div className="card">
            <h2>Our Story</h2>
            <p>Founded on the principle of leveraging technology to enhance patient care, Chantharzay has been at the forefront of healthcare innovation. We are a team of dedicated professionals committed to solving the industry's most pressing challenges through creative, robust solutions.</p>
          </div>
          <div className="card">
            <h2>Vision & Mission</h2>
            <p>Our vision is to create a seamlessly integrated digital healthcare ecosystem. Our mission is to empower healthcare providers with state-of-the-art tools that improve diagnostics, streamline workflows, and foster better patient outcomes.</p>
          </div>
          <div className="card">
            <h2>Our Culture</h2>
            <p>We foster a culture of collaboration, curiosity, and continuous learning. Our team is encouraged to think big, challenge the status quo, and pursue excellence in every detail. We believe that a supportive and inclusive environment is the key to building truly transformative technology.</p>
          </div>
        </div>
        <div className="values-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item"><FaRegHospital /> Commitment to Quality</div>
            <div className="value-item"><FaLightbulb /> Patient-Centric Innovation</div>
            <div className="value-item"><FaShieldAlt /> Data-Driven Reliability</div>
            <div className="value-item"><FaBullseye /> Long-term Strategic Focus</div>
          </div>
        </div>
        <div className="page-content" style={{ marginTop: '2rem' }}>
          <div className="card company-team-card">
            <img src="https://placehold.co/500x300/0A4D68/F7F7F7?text=Our+Team" alt="Our Team" />
            <div className="company-team-text">
              <h2>Meet Our Team</h2>
              <p>Our success is driven by a diverse team of software engineers, medical experts, and product designers who are passionate about making a difference. We unite creativity and expertise to build the future of healthcare.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;

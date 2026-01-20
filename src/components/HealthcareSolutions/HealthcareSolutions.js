import React from 'react';
import { FaClipboardList, FaLaptopCode, FaRocket, FaCheckCircle } from 'react-icons/fa';
import Header from '../Header/Header';
import '../Page/Page.css';
import './HealthcareSolutions.css';
import '../Card/Card.css';

const HealthcareSolutions = () => {
  return (
    <div className="healthcare-solutions-container">
      <Header title="Our Healthcare Solutions" subtitle="End-to-end digital services for the modern medical industry." />
      <div className="page-container">
        <div className="process-section">
          <h2>Our Process</h2>
          <div className="process-steps">
            <div className="step"><FaClipboardList /><h4>1. Discovery & Strategy</h4><p>We begin by understanding your unique challenges and strategic goals.</p></div>
            <div className="step"><FaLaptopCode /><h4>2. Design & Development</h4><p>Our team designs and develops intuitive, robust, and secure solutions.</p></div>
            <div className="step"><FaRocket /><h4>3. Implementation & Launch</h4><p>We ensure a seamless implementation and provide full support during launch.</p></div>
            <div className="step"><FaCheckCircle /><h4>4. Support & Optimization</h4><p>We offer ongoing support and continuous optimization to ensure long-term success.</p></div>
          </div>
        </div>
        <div className="page-content" style={{ marginTop: '2rem' }}>
          <div className="card">
            <h3>Hospital Management Systems</h3>
            <p>Optimize hospital operations, from patient records to billing and administration, with our comprehensive systems.</p>
          </div>
          <div className="card">
            <h3>Clinic Management Software</h3>
            <p>Streamline clinic workflows, manage appointments, and access patient data with our tailored solutions.</p>
          </div>
          <div className="card">
            <h3>Laboratory & Diagnostic Systems</h3>
            <p>Integrate and manage lab samples, test results, and reporting with our specialized diagnostic systems.</p>
          </div>
          <div className="card">
            <h3>Pharmacy & Inventory Control</h3>
            <p>Efficiently manage pharmacy operations and control inventory with our purpose-built software.</p>
          </div>
          <div className="card">
            <h3>Medical Reporting & Analytics</h3>
            <p>Leverage powerful tools for data-driven insights and improved decision-making through advanced analytics.</p>
          </div>
          <div className="card">
            <h3>Telemedicine & Remote Care</h3>
            <p>Provide secure, user-friendly platforms for remote consultations and continuous patient care.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareSolutions;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Company from './components/Company/Company';
import HealthcareSolutions from './components/HealthcareSolutions/HealthcareSolutions';
import MobileApplications from './components/MobileApplications/MobileApplications';
import Technology from './components/Technology/Technology';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsOfService from './components/TermsOfService/TermsOfService';
import './App.css';

function App() {
  return (
    <Router className="app-container">
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/healthcare-solutions" element={<HealthcareSolutions />} />
          <Route path="/mobile-applications" element={<MobileApplications />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

import React from 'react';
import { FaGooglePlay, FaAppStore } from 'react-icons/fa';
import Header from '../Header/Header';
import '../Page/Page.css';
import './MobileApplications.css';
import '../Card/Card.css';

import health_guide_login from '../../image/user/health_guide_login.png';
import health_guide_home from '../../image/user/health_guide_home.png';
import health_guide_category from '../../image/user/health_guide_category.png';
import health_guide_answer from '../../image/user/health_guide_answer.png';
import health_guide_answer_1 from '../../image/user/health_guide_answer_1.png';
import health_guide_result from '../../image/user/health_guide_result.png';

import health_guide_apointment from '../../image/clinic/health_guide_apointment.png';
import health_guide_booking_confirm from '../../image/clinic/health_guide_booking_confirm.png';
import health_guide_booking from '../../image/clinic/health_guide_booking.png';
import health_guide_date_picker from '../../image/clinic/health_guide_date_picker.png';
import health_guide_doctor_selection from '../../image/clinic/health_guide_doctor_selection.png';
import health_guide_time_picker from '../../image/clinic/health_guide_time_picker.png';

const MobileApplications = () => {
  return (
    <div className="mobile-applications-container">
      <Header title="Mobile Applications" />
      <div className="page-container">
        <div className="page-content">
          <div className="card">
            <h3>For Patients</h3>
            <p>Users can move from uncertainty about symptoms to a confirmed next step (Differential Diagnosis to Booking) in less than five minutes. The application empowers users with medically accurate, personalized insights to connect them to the right care provider at the right time, minimizing delays and reducing unnecessary healthcare costs.</p>
          </div>
          <div className="card">
            <h3>For Clinics</h3>
            <p>Healthcare providers receive pre-screened, more appropriate patient bookings, increasing clinical efficiency and reducing no-shows. The clinic-facing application allows for managing bookings and streamlining workflows.</p>
          </div>
          <div className="card">
            <h3>Core Functionalities</h3>
            <ul>
              <li>AI-powered symptom checking</li>
              <li>Appointment booking with clinics and hospitals</li>
              <li>Personalized health insights</li>
              <li>Secure communication with healthcare providers</li>
              <li>Access to medical records</li>
            </ul>
          </div>
          <div className="card">
            <h3>Vision</h3>
            <p>To be the globally trusted, AI-powered health navigator that transforms passive symptom checking into proactive, efficient, and appropriate access to care.</p>
            <h3>Mission</h3>
            <p>Empower users with medically accurate, personalized insights to connect them to the right care provider at the right time, minimizing delays and reducing unnecessary healthcare costs.</p>
          </div>
        </div>
        <div className="app-screenshots-container">
          <h2>User App</h2>
          <div className="app-screenshots">
            <img src={health_guide_login} alt="App Screenshot 1" />
            <img src={health_guide_home} alt="App Screenshot 2" />
            <img src={health_guide_category} alt="App Screenshot 3" />
            <img src={health_guide_answer} alt="App Screenshot 1" />
            <img src={health_guide_answer_1} alt="App Screenshot 2" />
            <img src={health_guide_result} alt="App Screenshot 3" />
          </div>
        </div>
        <div className="app-screenshots-container">
          <h2>Clinic App</h2>
          <div className="app-screenshots">
            <img src={health_guide_apointment} alt="App Screenshot 1" />
            <img src={health_guide_booking_confirm} alt="App Screenshot 2" />
            <img src={health_guide_booking} alt="App Screenshot 3" />
            <img src={health_guide_date_picker} alt="App Screenshot 4" />
            <img src={health_guide_doctor_selection} alt="App Screenshot 5" />
            <img src={health_guide_time_picker} alt="App Screenshot 6" />
          </div>
        </div>
        <div className="download-buttons">
            <a href="https://play.google.com/store/apps/details?id=com.HealthGuide&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="download-button play-store"><FaGooglePlay /> Google Play</a>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="download-button app-store"><FaAppStore /> App Store</a>
        </div>
        <div className="page-content" style={{ marginTop: '2rem' }}>
          <div className="card">
            <h3>Value Proposition (User)</h3>
            <p>Users move from uncertainty about symptoms to a confirmed next step (Differential Diagnosis &rarr; Booking) in less than five minutes.</p>
          </div>
          <div className="card">
            <h3>Value Proposition (Clinics/Hospitals)</h3>
            <p>Healthcare providers receive pre-screened, more appropriate patient bookings, increasing clinical efficiency and reducing no-shows.</p>
          </div>
        </div>
        <div className="medical-board-card">
          <h2>Medical Board for this App</h2>
          <p><strong>Supervised by:</strong> Professor Dr Htun Htun Win (Chest physician), Professor of UM2 Chest medical Unit</p>
          <p><strong>Content written by:</strong> Dr Soe Yan Naing</p>
          <p><strong>Created by:</strong> Dr Soe Yan Naing and Dr Thurein</p>
        </div>
      </div>
    </div>
  );
};

export default MobileApplications;

import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <div className="mobile-applications-container">
      <Header title={t('mobile_apps_title')} />
      <div className="page-container">
        <div className="page-content">
          <div className="card">
            <h3>{t('for_patients_title')}</h3>
            <p>{t('for_patients_text')}</p>
          </div>
          <div className="card">
            <h3>{t('for_clinics_title')}</h3>
            <p>{t('for_clinics_text')}</p>
          </div>
          <div className="card">
            <h3>{t('core_functionalities_title')}</h3>
            <ul>
              <li>{t('ai_powered_symptom_checking')}</li>
              <li>{t('appointment_booking')}</li>
              <li>{t('personalized_health_insights')}</li>
              <li>{t('secure_communication')}</li>
              <li>{t('access_to_medical_records')}</li>
            </ul>
          </div>
          <div className="card">
            <h3>{t('vision_title')}</h3>
            <p>{t('vision_text')}</p>
            <h3>{t('mission_title')}</h3>
            <p>{t('mission_text')}</p>
          </div>
        </div>
        <div className="app-screenshots-container">
          <h2>{t('user_app_title')}</h2>
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
          <h2>{t('clinic_app_title')}</h2>
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
            <a href="https://play.google.com/store/apps/details?id=com.HealthGuide&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="download-button play-store"><FaGooglePlay /> {t('google_play_button')}</a>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="download-button app-store"><FaAppStore /> {t('app_store_button')}</a>
        </div>
        <div className="page-content" style={{ marginTop: '2rem' }}>
          <div className="card">
            <h3>{t('value_proposition_user_title')}</h3>
            <p>{t('value_proposition_user_text')}</p>
          </div>
          <div className="card">
            <h3>{t('value_proposition_clinics_title')}</h3>
            <p>{t('value_proposition_clinics_text')}</p>
          </div>
        </div>
        <div className="medical-board-card">
          <h2>{t('medical_board_title')}</h2>
          <p><strong>{t('supervised_by')}:</strong> {t('professor_dr_htun_htun_win')}</p>
          <p><strong>{t('content_written_by')}:</strong> {t('dr_soe_yan_naing')}</p>
          <p><strong>{t('created_by')}:</strong> {t('dr_soe_yan_naing_and_dr_thurein')}</p>
        </div>
      </div>
    </div>
  );
};

export default MobileApplications;

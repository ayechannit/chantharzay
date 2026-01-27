import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegHospital, FaLightbulb, FaShieldAlt, FaBullseye } from 'react-icons/fa';
import Header from '../Header/Header';
import '../Page/Page.css';
import './Company.css';
import '../Card/Card.css';

const Company = () => {
  const { t } = useTranslation();

  return (
    <div className="company-container">
      <Header title={t('company_title')} subtitle={t('company_subtitle')} />
      <div className="page-container">
        <div className="page-content">
          <div className="card">
            <h2>{t('our_story_title')}</h2>
            <p>{t('our_story_text')}</p>
          </div>
          <div className="card">
            <h2>{t('vision_mission_title')}</h2>
            <p>{t('vision_mission_text')}</p>
          </div>
          <div className="card">
            <h2>{t('our_culture_title')}</h2>
            <p>{t('our_culture_text')}</p>
          </div>
        </div>
        <div className="values-section">
          <h2>{t('our_core_values_title')}</h2>
          <div className="values-grid">
            <div className="value-item"><FaRegHospital /> {t('commitment_to_quality')}</div>
            <div className="value-item"><FaLightbulb /> {t('patient_centric_innovation')}</div>
            <div className="value-item"><FaShieldAlt /> {t('data_driven_reliability')}</div>
            <div className="value-item"><FaBullseye /> {t('long_term_strategic_focus')}</div>
          </div>
        </div>
        <div className="page-content" style={{ marginTop: '2rem' }}>
          <div className="card company-team-card">
            <img src="https://placehold.co/500x300/0A4D68/F7F7F7?text=Our+Team" alt="Our Team" />
            <div className="company-team-text">
              <h2>{t('meet_our_team_title')}</h2>
              <p>{t('meet_our_team_text')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;

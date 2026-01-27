import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaClipboardList, FaLaptopCode, FaRocket, FaCheckCircle } from 'react-icons/fa';
import Header from '../Header/Header';
import '../Page/Page.css';
import './HealthcareSolutions.css';
import '../Card/Card.css';

const HealthcareSolutions = () => {
  const { t } = useTranslation();

  return (
    <div className="healthcare-solutions-container">
      <Header title={t('healthcare_solutions_title')} subtitle={t('healthcare_solutions_subtitle')} />
      <div className="page-container">
        <div className="process-section">
          <h2>{t('our_process_title')}</h2>
          <div className="process-steps">
            <div className="step"><FaClipboardList /><h4>{t('discovery_strategy_title')}</h4><p>{t('discovery_strategy_text')}</p></div>
            <div className="step"><FaLaptopCode /><h4>{t('design_development_title')}</h4><p>{t('design_development_text')}</p></div>
            <div className="step"><FaRocket /><h4>{t('implementation_launch_title')}</h4><p>{t('implementation_launch_text')}</p></div>
            <div className="step"><FaCheckCircle /><h4>{t('support_optimization_title')}</h4><p>{t('support_optimization_text')}</p></div>
          </div>
        </div>
        <div className="page-content" style={{ marginTop: '2rem' }}>
          <div className="card">
            <h3>{t('hospital_management_systems_title')}</h3>
            <p>{t('hospital_management_systems_text')}</p>
          </div>
          <div className="card">
            <h3>{t('clinic_management_software_title')}</h3>
            <p>{t('clinic_management_software_text')}</p>
          </div>
          <div className="card">
            <h3>{t('laboratory_diagnostic_systems_title')}</h3>
            <p>{t('laboratory_diagnostic_systems_text')}</p>
          </div>
          <div className="card">
            <h3>{t('pharmacy_inventory_control_title')}</h3>
            <p>{t('pharmacy_inventory_control_text')}</p>
          </div>
          <div className="card">
            <h3>{t('medical_reporting_analytics_title')}</h3>
            <p>{t('medical_reporting_analytics_text')}</p>
          </div>
          <div className="card">
            <h3>{t('telemedicine_remote_care_title')}</h3>
            <p>{t('telemedicine_remote_care_text')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareSolutions;

import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCogs, FaServer, FaShieldAlt } from 'react-icons/fa';
import Header from '../Header/Header';
import '../Page/Page.css';
import './Technology.css';
import '../Card/Card.css';

const Technology = () => {
  const { t } = useTranslation();

  return (
    <div className="technology-container">
      <Header title={t('technology_title')} />
      <div className="page-container">
        <div className="page-content">
          <div className="card tech-card">
            <FaCogs className="tech-icon" />
            <h3>{t('modern_technology_stack_title')}</h3>
            <p>{t('modern_technology_stack_text')}</p>
          </div>
          <div className="card tech-card">
            <FaServer className="tech-icon" />
            <h3>{t('scalability_reliability_title')}</h3>
            <p>{t('scalability_reliability_text')}</p>
          </div>
          <div className="card tech-card">
            <FaShieldAlt className="tech-icon" />
            <h3>{t('security_compliance_title')}</h3>
            <p>{t('security_compliance_text')}</p>
          </div>
        </div>
        <div className="technology-philosophy">
          <h2>{t('our_technology_philosophy_title')}</h2>
          <p>{t('our_technology_philosophy_text')}</p>
        </div>
      </div>
    </div>
  );
};

export default Technology;

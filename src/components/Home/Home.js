import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaLightbulb, FaUsers, FaHeartbeat } from 'react-icons/fa';
import './Home.css';
import '../Card/Card.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>{t('home_header_title')}</h1>
        <p>{t('home_header_subtitle')}</p>
        <Link to="/contact" className="cta-button">{t('get_in_touch_button')}</Link>
      </header>
      <section className="home-section">
        <h2>{t('our_healthcare_ecosystem')}</h2>
        <div className="home-cards">
          <div className="card">
            <h3>{t('healthcare_solutions_card_title')}</h3>
            <p>{t('healthcare_solutions_card_text')}</p>
            <Link to="/healthcare-solutions">{t('learn_more_button')}</Link>
          </div>
          <div className="card">
            <h3>{t('mobile_applications_card_title')}</h3>
            <p>{t('mobile_applications_card_text')}</p>
            <Link to="/mobile-applications">{t('learn_more_button')}</Link>
          </div>
          <div className="card">
            <h3>{t('our_technology_card_title')}</h3>
            <p>{t('our_technology_card_text')}</p>
            <Link to="/technology">{t('learn_more_button')}</Link>
          </div>
        </div>
      </section>
      <section className="why-choose-us">
        <h2>{t('why_choose_us')}</h2>
        <div className="features">
          <div className="feature-item">
            <FaLightbulb className="feature-icon" />
            <h3>{t('innovative_solutions_title')}</h3>
            <p>{t('innovative_solutions_text')}</p>
          </div>
          <div className="feature-item">
            <FaUsers className="feature-icon" />
            <h3>{t('user_centric_design_title')}</h3>
            <p>{t('user_centric_design_text')}</p>
          </div>
          <div className="feature-item">
            <FaHeartbeat className="feature-icon" />
            <h3>{t('healthcare_focused_title')}</h3>
            <p>{t('healthcare_focused_text')}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

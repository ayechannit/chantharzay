import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../Header/Header';
import '../Page/Page.css';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="privacy-policy-container">
      <Header title={t('privacy_policy_title')} />
      <div className="page-container legal-page">
        <h2>{t('privacy_policy_introduction_title')}</h2>
        <p>{t('privacy_policy_introduction_text')}</p>

        <h2>{t('privacy_policy_collection_title')}</h2>
        <p>{t('privacy_policy_collection_text')}</p>
        <ul>
          <li><strong>{t('privacy_policy_collection_personal_data_title')}:</strong> {t('privacy_policy_collection_personal_data_text')}</li>
          <li><strong>{t('privacy_policy_collection_derivative_data_title')}:</strong> {t('privacy_policy_collection_derivative_data_text')}</li>
          <li><strong>{t('privacy_policy_collection_health_information_title')}:</strong> {t('privacy_policy_collection_health_information_text')}</li>
        </ul>

        <h2>{t('privacy_policy_use_title')}</h2>
        <p>{t('privacy_policy_use_text')}</p>
        <ul>
          <li>{t('privacy_policy_use_item_1')}</li>
          <li>{t('privacy_policy_use_item_2')}</li>
          <li>{t('privacy_policy_use_item_3')}</li>
          <li>{t('privacy_policy_use_item_4')}</li>
          <li>{t('privacy_policy_use_item_5')}</li>
          <li>{t('privacy_policy_use_item_6')}</li>
        </ul>

        <h2>{t('privacy_policy_security_title')}</h2>
        <p>{t('privacy_policy_security_text')}</p>

        <h2>{t('privacy_policy_contact_title')}</h2>
        <p>{t('privacy_policy_contact_text')}</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

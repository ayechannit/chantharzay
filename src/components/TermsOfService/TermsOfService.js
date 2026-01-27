import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../Header/Header';
import '../Page/Page.css';
import './TermsOfService.css';

const TermsOfService = () => {
  const { t } = useTranslation();

  return (
    <div className="terms-of-service-container">
      <Header title={t('terms_of_service_title')} />
      <div className="page-container legal-page">
        <h2>{t('terms_of_service_agreement_title')}</h2>
        <p>{t('terms_of_service_agreement_text')}</p>
        
        <h2>{t('terms_of_service_disclaimer_title')}</h2>
        <p>{t('terms_of_service_disclaimer_text')}</p>

        <h2>{t('terms_of_service_accounts_title')}</h2>
        <p>{t('terms_of_service_accounts_text')}</p>

        <h2>{t('terms_of_service_prohibited_title')}</h2>
        <p>{t('terms_of_service_prohibited_text')}</p>

        <h2>{t('terms_of_service_termination_title')}</h2>
        <p>{t('terms_of_service_termination_text')}</p>

        <h2>{t('terms_of_service_contact_title')}</h2>
        <p>{t('terms_of_service_contact_text')}</p>
      </div>
    </div>
  );
};

export default TermsOfService;

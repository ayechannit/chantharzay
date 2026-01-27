import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('en')} disabled={i18n.language === 'en'}>
        <FaGlobe /> EN
      </button>
      <button onClick={() => changeLanguage('my')} disabled={i18n.language === 'my'}>
        <FaGlobe /> MY
      </button>
    </div>
  );
};

export default LanguageSwitcher;

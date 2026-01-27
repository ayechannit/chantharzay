import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Header from '../Header/Header';
import '../Page/Page.css';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-container">
      <Header title={t('contact_us')} subtitle={t('contact_us_subtitle')} />
      <div className="page-container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>{t('get_in_touch')}</h3>
            <p><FaMapMarkerAlt /> <strong>{t('address')}:</strong> [Your Company Address]</p>
            <p><FaEnvelope /> <strong>{t('email')}:</strong> [Your Company Email]</p>
            <p><FaPhone /> <strong>{t('phone')}:</strong> [Your Company Phone]</p>
            <p><FaClock /> <strong>{t('business_hours')}:</strong> [Your Business Hours]</p>
          </div>
          <div className="contact-form">
            <h3>{t('send_us_a_message')}</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">{t('name')}</label>
                <input type="text" id="name" name="name" placeholder={t('your_name')} />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t('email')}</label>
                <input type="email" id="email" name="email" placeholder={t('your_email')} />
              </div>
              <div className="form-group">
                <label htmlFor="message">{t('message')}</label>
                <textarea id="message" name="message" placeholder={t('your_message')}></textarea>
              </div>
              <button type="submit" className="cta-button">{t('send_message')}</button>
            </form>
          </div>
        </div>
        <div className="google-map">
          <iframe title="Company Location Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.3251607038096!2d99.05730907602016!3d18.783657082361746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da2535b5da45d3%3A0x9da39b5eca6bf3db!2z4Lia4LmJ4Liy4LiZ4Lie4Lij4LmJ4Lit4Lih4LmC4LiK4LiEIOC5geC4oeC4meC4iuC4seC5iOC4mSA2!5e0!3m2!1sen!2sth!4v1768884371648!5m2!1sen!2sth" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

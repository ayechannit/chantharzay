import React from 'react';
import Header from '../Header/Header';
import '../Page/Page.css';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <Header title="Privacy Policy" />
      <div className="page-container legal-page">
        <h2>Introduction</h2>
        <p>Your privacy is important to us. This Privacy Policy explains how Chantharzay ("we," "us," or "our") collects, uses, discloses, and safeguards your information when you use our website and mobile applications (the "Services"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Services.</p>

        <h2>Collection of Your Information</h2>
        <p>We may collect information about you in a variety of ways. The information we may collect via the Services includes:</p>
        <ul>
          <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Services or when you choose to participate in various activities related to the Services, such as online chat and message boards.</li>
          <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Services, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Services.</li>
          <li><strong>Health Information:</strong> In order to provide our core services, we may collect health-related information that you voluntarily provide, such as symptoms, health history, and other data relevant to our AI-powered symptom checker.</li>
        </ul>

        <h2>Use of Your Information</h2>
        <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Services to:</p>
        <ul>
          <li>Create and manage your account.</li>
          <li>Provide you with our core AI-powered health navigator services.</li>
          <li>Email you regarding your account or order.</li>
          <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Services.</li>
          <li>Improve our Services and user experience.</li>
          <li>Monitor and analyze usage and trends to improve your experience with the Services.</li>
        </ul>

        <h2>Security of Your Information</h2>
        <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

        <h2>Contact Us</h2>
        <p>If you have questions or comments about this Privacy Policy, please contact us at: [Your Company Email]</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

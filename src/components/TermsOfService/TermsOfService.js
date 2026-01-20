import React from 'react';
import Header from '../Header/Header';
import '../Page/Page.css';
import './TermsOfService.css';

const TermsOfService = () => {
  return (
    <div className="terms-of-service-container">
      <Header title="Terms of Service" />
      <div className="page-container legal-page">
        <h2>1. Agreement to Terms</h2>
        <p>By using our Services, you agree to be bound by these Terms of Service. If you do not agree to these Terms, do not use the Services. We may modify the Terms at any time, in our sole discretion. If we do so, we'll let you know either by posting the modified Terms on the site or through other communications.</p>
        
        <h2>2. Disclaimer</h2>
        <p>The information and services provided by Chantharzay are for informational purposes only and do not constitute medical advice. Our AI-powered health navigator is a tool to help users make more informed decisions but is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>

        <h2>3. User Accounts</h2>
        <p>You may be required to create an account to access some of our services. You are responsible for safeguarding your account, and you agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>

        <h2>4. Prohibited Activities</h2>
        <p>You agree not to use the Services for any purpose that is illegal or prohibited by these Terms. You agree not to use the Services in any manner that could damage, disable, overburden, or impair the Services or interfere with any other party's use and enjoyment of the Services.</p>

        <h2>5. Termination</h2>
        <p>We may terminate or suspend your access to all or part of the Services at any time, with or without cause, with or without notice, effective immediately.</p>

        <h2>6. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at: [Your Company Email]</p>
      </div>
    </div>
  );
};

export default TermsOfService;

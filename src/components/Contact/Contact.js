import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
import Header from '../Header/Header';
import '../Page/Page.css';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <Header title="Contact Us" subtitle="We'd love to hear from you. Please reach out with any questions or inquiries." />
      <div className="page-container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p><FaMapMarkerAlt /> <strong>Address:</strong> [Your Company Address]</p>
            <p><FaEnvelope /> <strong>Email:</strong> [Your Company Email]</p>
            <p><FaPhone /> <strong>Phone:</strong> [Your Company Phone]</p>
            <p><FaClock /> <strong>Business Hours:</strong> [Your Business Hours]</p>
          </div>
          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="cta-button">Send Message</button>
            </form>
          </div>
        </div>
        <div className="google-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.3251607038096!2d99.05730907602016!3d18.783657082361746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da2535b5da45d3%3A0x9da39b5eca6bf3db!2z4Lia4LmJ4Liy4LiZ4Lie4Lij4LmJ4Lit4Lih4LmC4LiK4LiEIOC5geC4oeC4meC4iuC4seC5iOC4mSA2!5e0!3m2!1sen!2sth!4v1768884371648!5m2!1sen!2sth" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="text-center">Contact Us</h2>
        <div className="contact-icons text-center">
          <a href="mailto:example@example.com">
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="contact-icon" />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" className="contact-icon" />
          </a>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" className="form-control" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
  return (
    // Not displaying for some reason
    <div className="contact-container">
      <div className="contact-details">
        <h1>Contact Me</h1>
        <p><FontAwesomeIcon icon={faEnvelope} /> Email: your-email@example.com</p>
        <p><FontAwesomeIcon icon={faPhone} /> Phone: (123) 456-7890</p>
        {/* <div className="contact-icons">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon" /> LinkedIn
          </a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="icon" /> GitHub
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Contact;


import React from 'react';
// Adding the Icons
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-details">
        <h1>Contact Me</h1>

        <p><FontAwesomeIcon icon={faEnvelope} /> Email: monterrosas78@hotmail.com</p>
        <p><FontAwesomeIcon icon={faPhone} /> Phone: 714-234-7976</p>
        {/* Adding the github and the linkedIN page as well */}
         <div className="contact-icons">
          <a href="https://www.linkedin.com/in/ariel-monterrosas-591975211/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon" /> LinkedIn
          </a>
          <a href="https://github.com/Monterro324" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="icon" /> GitHub
          </a>
          </div>
      </div>
    </div>
  );
}

export default Contact;



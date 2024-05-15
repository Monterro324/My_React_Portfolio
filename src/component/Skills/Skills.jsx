import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';  // Corrected import for C++ image
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';

// No images needed in this section
//Move to projects ASAP; Add Tic Tac and Swipe&Dine Project

const Skills = () => {
  return (

    <div className="skills-container fade-in">

        {/* First Column */}
      <div className="column fade-in">
        <h2 className="fade-in">C++</h2>

        {/* Issues with importing the Icons from the FortAwesome */}
        {/* Finally works, was the way it was imported, fourth line made it possible */}
        <FontAwesomeIcon icon={faCode} color="#00599C" className="icon" />
        <p className="fade-in">Proficient in C++ programming with experience in developing efficient algorithms and data structures. Was the language I spent the most time with learning.</p>
      </div>

      {/* React Native Column */}
      <div className="column fade-in">
        <h2 className="fade-in">React Native</h2>
        <FontAwesomeIcon icon={faReact} color="#61DBFB" className="icon" />
        <p className="fade-in">Began my React Native Journey Spring 2024 to work on my Senior Capstone project. Not only was it with my Capstone project but with this portfolio as well.</p>
      </div>

      {/* Python Column */}
      <div className="column fade-in">
        <h2 className="fade-in">Python</h2>
        <FontAwesomeIcon icon={faPython} color="#3776AB" className="icon" />
        <p className="fade-in">Was the first language that I learned to program with when attending Chapman University. Not as projcient as I would want to be, but I'm currently working on an project using it.</p>
      </div>
    </div>
  );
}

export default Skills;

import React from 'react';
import './Projects.css'; // Make sure this CSS file is correctly set up
import ticTacToeImage from '../../assets/Tic-Tac.png'; // Add your image file here
import swipeDineImage from '../../assets/Swipe&DineIntro.png'; // Add your image file here

const Projects = () => {

  
    return (
      <div className="projects-container">
        {/* First Column */}
        
        <div className="project-column">
            {/* Gonna use anchor tags, seems like the easiest way to do so */}
        <a href = "https://github.com/Monterro324/Tic-Tac" target = "_blank" rel = "noopener noreferrer">
            <img src={ticTacToeImage} alt="Tic-Tac-Toe" className="project-image" />
        </a>
          <h2>Tic-Tac-Toe</h2>
          <p>A classic Tic-Tac-Toe game built with React. Made with using React JS.</p>
        </div>
        {/* Second Column */}
        <div className="project-column">
        <a href = "https://github.com/SohnJustin/Swipe-Dine" target = "_blank" rel = "noopener noreferrer">
                <img src={swipeDineImage} alt="Swipe&Dine" className="project-image" />
        </a>
          <h2>Swipe&Dine</h2>
          <p>My Senior Capstone for 491. Is a mobile app called Swipe&Dine that allows users to swipe right to select a resturant which will show a map to how to get there.</p>
        </div>
      </div>
    );
  }

export default Projects;

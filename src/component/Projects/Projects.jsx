import React from 'react';
import './Projects.css'; // Make sure this CSS file is correctly set up
import ticTacToeImage from '../../assets/Tic-Tac.png'; // Add your image file here
import swipeDineImage from '../../assets/Swipe&DineIntro.png'; // Add your image file here

const Projects = () => {
    console.log("Projects component rendered"); // Add a log to check if the component is being rendered
  
    return (
      <div className="projects-container">
        <div className="project-column">
          <img src={ticTacToeImage} alt="Tic-Tac-Toe" className="project-image" />
          <h2>Tic-Tac-Toe</h2>
          <p>A classic Tic-Tac-Toe game built with React. Features include...</p>
        </div>
        <div className="project-column">
          <img src={swipeDineImage} alt="Swipe&Dine" className="project-image" />
          <h2>Swipe&Dine</h2>
          <p>Swipe&Dine is an app that allows users to swipe right to make a reservation and left to decline a restaurant...</p>
        </div>
      </div>
    );
  }

export default Projects;

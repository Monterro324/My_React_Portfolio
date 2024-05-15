// Import the necessary icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faToolbox, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

// Update your Navbar component
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavgationBar.css'; // Make sure your CSS is correctly set up

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact className={({ isActive }) => isActive ? 'active' : undefined}>
        <FontAwesomeIcon icon={faHome} className="icon" /> Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : undefined}>
        <FontAwesomeIcon icon={faUser} className="icon" /> About
      </NavLink>
      <NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : undefined}>
        <FontAwesomeIcon icon={faToolbox} className="icon" /> Skills
      </NavLink>
      <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : undefined)}> {/* Add Projects link */}
        <FontAwesomeIcon icon={faProjectDiagram} className="icon" /> Projects
      </NavLink>
    </div>
  );
}

export default Navbar;

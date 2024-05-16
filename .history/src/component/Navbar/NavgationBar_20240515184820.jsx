// Import the necessary icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faToolbox, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Update your Navbar component
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavgationBar.css'; // Make sure your CSS is correctly set up

const Navbar = () => {
  return (
    // Adding Navbar
    //Use FontAwsomeIcon for the icons on the navbar
    <div className="navbar">
<NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined}>
  <FontAwesomeIcon icon={faHome} className="icon" /> Home
</NavLink>

      <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : undefined}>
        <FontAwesomeIcon icon={faUser} className="icon" /> About
      </NavLink>
      <NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : undefined}>
        <FontAwesomeIcon icon={faToolbox} className="icon" /> Skills
      </NavLink>
      <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : undefined)}> 
        <FontAwesomeIcon icon={faProjectDiagram} className="icon" /> Projects
      </NavLink>
      {/* Remember to check what you name THEM lol, was taking hours trying to figure out why it didn't pop up */}
      <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : undefined)}> 
        <FontAwesomeIcon icon={faEnvelope} className="icon" /> Contact
      </NavLink>
    </div>
  );
}

export default Navbar;

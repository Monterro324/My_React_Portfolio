// src/components/Home/Home.js
import React from 'react';
import './Home.css';
import avatar from '../../assets/Ariel.png'; // Adjust path as needed

const Home = () => {
  return (
    <div className="home">
      {/* Importing the image */}
      <img src={avatar} alt="Ariel" className="avatar" />
      <h1>Welcome to My Portfolio!</h1>
      <p>My name is Ariel! A Senior Comp Sci student.</p>
      <p>Use the Navigation Bar on the left-hand side to learn more about my journey.</p>
    </div>
  );
}

export default Home;

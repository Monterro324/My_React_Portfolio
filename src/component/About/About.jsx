import React from 'react';
import './About.css'; 
import ArielCopy from "../../assets/ArielCopy.png";
import SCCCopy from "../../assets/SCC.png";
import CSUFCopy from "../../assets/CSUF.png";


// Took the longest to debug because of there was a TINY white space when you scrolled down
const About = () => {
  return (

    // Creating two coloumns talking about my journey about going back to school
    <div className="about-container">

        {/* Beginning of first column */}
      <div className="left-column">
        <h1>About Me</h1>
        <p>Like all high school students, I did not have the slightest idea of what
            to do after high school. I had applied to some colleges to attend afterwards
            and managed to get in Chapman University. After one semester being there, I 
            decided to drop out since I really had no idea what to study for.
        </p>

        <p>After dropping out of college, I decided to work full-time and it wasn't until 
            after 2 years of working, that I realize I needed to go back to school. I
            eventually went back during the time COVID began and I spent the first
            two years of my community college doing online zoom at Santiago Canyon College.
        </p>
        {/* Inserting image below the paragraphs */}

        {/* Inserting photo from assets */}
        <img src={ArielCopy} alt = 'Ariel' className='about-image' />

      </div>

        {/* This right column will be about my college education and as well as my Hobbies */}
        {/* LOOK INTO PUTTING VIDEOS ABOUT DETAILING CARS!!!!!! */}
      <div className="right-column">
        <h2>College Journey</h2>
        <p>Santiago Canyon College </p>
        <p>Attended 2020-2022</p>

        {/* Inserting images and arrow below the paragraphs */}
        <div className="about-image-container">
          <img src={SCCCopy} alt='SCC' className='about-image' />
        </div>
        <div className="arrow-container">
          <span className="down-arrow"></span>
        </div>
        <p>Cal State Fullerton</p>
        <p>Expected Graduation: Fall 2024</p>
        <div className="about-image-container">
          <img src={CSUFCopy} alt='CSUF' className='about-image' />
        </div>
        

        <h2>My Hobbies</h2>
        <ul>
          <li>Detailing cars</li>
          <li>Hikes</li>
          <li>Collecting Pokemon cards</li>
        </ul>
        {/* Additional sections showcasing your journey */}
      </div>

    </div>
  );
}

export default About;




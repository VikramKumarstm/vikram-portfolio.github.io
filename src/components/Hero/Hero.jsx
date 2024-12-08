import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import HireMe from '../Button/HireMe/HireMe';

function Hero() {
  return (
    <div className='hero'>
      <div className="sub-hero">
        <div className="content">
          <h1>I'm Vikram Kumar</h1>
          <h3>I'm a <span className="role">Full Stack Developer</span></h3>
          <p>
            Motivated BCA student with a strong foundation in web development, currently 
            interning as a MERN stack developer. Proficient in React.js, JavaScript, 
            MongoDB, Express.js, Node.js, and Core Java. Actively expanding knowledge in 
            Data Structures and Algorithms. Fluent in English, Hindi, and regional languages, 
            with a passion for creating innovative and efficient web applications.
          </p>
          <Link to="/contact">
            <HireMe
              text="Hire Me"
            />
          </Link>
        </div>
        <div className="image">
          <img className='my-image' src="./images/portfolio-image.png" alt="image" />
        </div>
      </div>
    </div>
  )
}

export default Hero
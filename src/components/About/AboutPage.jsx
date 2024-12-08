import React from 'react'
import './AboutPage.css'
import HireMe from '../Button/HireMe/HireMe'
import DownloadCV from '../Button/DownloadCV/DownloadCV'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <div className='about'>
      <div className='sub-about'>
        <div className="about-image">
          <img src="/images/about/about6.webp" alt="image" />
        </div>
        <div className="text-content">
          <h1>About Me</h1>
          <p className='para1'>
            I am Vikram Kumar, a 20-year-old final-year BCA student at CIMAGE College, 
            Patna. Currently, I am gaining hands-on experience as a MERN stack developer 
            during my internship, where I work with technologies like React.js, JavaScript, 
            MongoDB, Express.js, and Node.js. Along with my expertise in Core Java and MySQL, 
            I am actively learning Data Structures and Algorithms to further enhance my problem-solving 
            skills.
          </p>
          <p className='para2'>
            I come from Sitamarhi, Bihar, and I am fluent in English, Hindi, and my regional 
            language. With a strong passion for web development and a desire to keep growing in 
            the field of software engineering, I am committed to building impactful solutions.
          </p>
          <div className='btn-div'>
            <Link to="/contact">
              <HireMe
                text="Hire Me"
              />
            </Link>
            <span className='left-btn'>
              <DownloadCV 
                text="Download CV"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
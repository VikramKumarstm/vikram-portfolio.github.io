import React from 'react';
import './Service.css';
import ServiceItem from '../ServiceItem/ServiceItem';
import cardData from '../ServiceItem/item'
import HireMe from '../Button/HireMe/HireMe';
import { Link } from 'react-router-dom';

function Service() {
  return (
    <div className='service'>
        <div className="sub-service">
            <div className="service-text">
                <h1>What I Offer</h1>
                <p className='embed'><em>"Bringing innovation and efficiency to your digital projects."</em></p>
                <p className='para'>
                    As a passionate web developer, I create solutions that fit your needs. 
                    Whether you need a beautiful website, a strong backend system, or a 
                    complete web application, I use my skills and creativity to deliver the 
                    best results.
                </p>
                <p className='para'>
                    My goal is to build high-quality, user-friendly websites and applications that help businesses
                    grow. I focus on designing attractive interfaces and building secure and reliable backends, 
                    ensuring your project is handled with care and attention.
                </p>
                <p className='embed'><em>"Let’s turn your ideas into amazing digital experiences!"</em></p>
            </div>
            <div className="service-item">
                 {cardData.slice(0,6).map((card, index) => (
                    <ServiceItem
                    key={index}
                    image={card.image}
                    heading={card.title}
                    text={card.description}
                     />
                 ))}
            </div>
            <div className='btn-div'>
            <Link to="/service">
              <HireMe
                text="Read More..."
              />
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Service
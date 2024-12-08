import React from 'react';
import './ServiceItem.css';

function ServiceItem({ image, heading, text }) {
  return (
    <div className='container'>
        <div className="item-image">
            <img src={ image } alt="" height={200} />
        </div>
        <div className="content">
            <h4 className='content-heading'>{ heading }</h4>
            <p className='content-text'>{ text }</p>
        </div>
    </div>
  )
}

export default ServiceItem
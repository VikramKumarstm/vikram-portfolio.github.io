import React from 'react';
import './HireMe.css';

function HireMe({text}) {
  return (
    <button className='hire-btn'>{text}</button>
  )
}

export default HireMe
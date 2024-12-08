import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { CgMenuRight } from "react-icons/cg";
import { FiX } from "react-icons/fi";

function Header() {

  const [mobile, setMobile] = useState(false);

  const toggleMenu = () => {
    setMobile(!mobile);
  };
  
  return (
    <div className='header'>
      <div className="sub-header">
        <div className='logo'>
          <h1>Vikram Kumar</h1>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {mobile ? <FiX /> : <CgMenuRight />}
        </div>
        <div className={`nav ${mobile ? "navlinks-mobile" : ""}`}>
          <ul onClick={() => setMobile(false)}>
            <li><Link className='nav-link' to="/">Home</Link></li>
            <li><Link className='nav-link' to="/about">About</Link></li>
            <li><Link className='nav-link' to="/experience">Experience</Link></li>
            <li><Link className='nav-link' to="/project">Projects</Link></li>
            <li><Link className='nav-link' to="/skills">Skills</Link></li>
            <li><Link className='nav-link' to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
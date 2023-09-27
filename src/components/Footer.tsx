import React from 'react'
import SocialNav from './SocialNav'
import Logo from './Logo'
import {Link } from 'react-scroll';

function Footer() {
  return (
    <footer className='sec footer'>
      <h3>You Can Find Me There</h3>
        <SocialNav className='footerNav' />
  <div className="row">
    <ul className="secfooterNav">
      <li><Link spy={true} smooth={true} duration={500} offset={5}  to="home">Home</Link></li>
      <li><Link spy={true} smooth={true} duration={500} offset={5}  to="about">About Me</Link></li>
      <li><Link spy={true} smooth={true} duration={500} offset={5}  to="projects">Projects</Link></li>
      <li><Link spy={true} smooth={true} duration={500} offset={5}  to="contact">Contact</Link></li>
    </ul>
  </div>
  <span>
     Copyright © 2023 - All rights reserved to <a href='/'>OMAR</a>  
  </span>
    </footer>
  )
}

export default Footer
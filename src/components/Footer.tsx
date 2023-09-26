import React from 'react'
import SocialNav from './SocialNav'
import Logo from './Logo'

function Footer() {
  return (
    <footer className='sec footer'>
      <h3>You Can Find Me There</h3>
        <SocialNav className='footerNav' />
  <div className="row">
    <ul className="secfooterNav">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About Me</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
  <span>
     Copyright © 2023 - All rights reserved to <a href='/'>OMAR</a>  
  </span>
    </footer>
  )
}

export default Footer
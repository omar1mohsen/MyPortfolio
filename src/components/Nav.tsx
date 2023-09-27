import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import Logo from "./Logo";
import { AiFillHome } from "react-icons/ai";
import { BsInfoSquareFill } from "react-icons/bs";
import { SiTestrail } from "react-icons/si";
import { BiSolidContact } from "react-icons/bi";
import { FaHandPointDown } from "react-icons/fa";
import ThemBtn from "./ThemBtn";
import SocialNav from "./SocialNav";
import {Link } from 'react-scroll';

function Nav() {
  const [open,setOpen] = useState(false)
  const handleClose = ()=>{
    setOpen(!open)
  }
  return (
    <nav className="nav" id="nav">
      <Logo />
      <ul className={`nav-list ${open && 'activeList'}`}>
        <Logo className="navLogo" /> 
        <li className="nav-item">
          <Link smooth={true} offset={5} duration={500} spy={true} to="home" onClick={handleClose}><AiFillHome className="icon" />  Home</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} offset={5} duration={500} spy={true} to="about" onClick={handleClose}><BsInfoSquareFill className="icon"/> About</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} offset={5} duration={500} spy={true} to="projects" onClick={handleClose}><SiTestrail className="icon"/> Projects</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} offset={5} duration={500} spy={true} to="contact" onClick={handleClose}><BiSolidContact className="icon"/> Contact</Link>
        </li>
        <ThemBtn />
        <hr />
        <span>Find me There <FaHandPointDown className="icon"/></span>
        <SocialNav className="scoialNav" />
      </ul>
      <div className={`burger-btn ${open && 'activeBtn'}`} onClick={handleClose}>
          <span />
          <span />
          <span/>
      </div>
      <ProgressBar/>
    </nav>
  );
}

export default Nav;

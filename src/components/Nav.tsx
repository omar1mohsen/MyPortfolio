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
          <a href="#home" onClick={handleClose}><AiFillHome className="icon" />  Home</a>
        </li>
        <li className="nav-item">
          <a href="#about" onClick={handleClose}><BsInfoSquareFill className="icon"/> About</a>
        </li>
        <li className="nav-item">
          <a href="#projects" onClick={handleClose}><SiTestrail className="icon"/> Projects</a>
        </li>
        <li className="nav-item">
          <a href="#contact" onClick={handleClose}><BiSolidContact className="icon"/> Contact</a>
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

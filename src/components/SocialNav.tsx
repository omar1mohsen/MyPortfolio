import React from 'react'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { BiLogoGmail} from 'react-icons/bi';
import { IoLogoWhatsapp} from 'react-icons/io';
import ReactWhatsapp from "react-whatsapp";

function SocialNav({className}:{className? : string}) {
  return (
    <div className={className}>
        <a href="https://www.linkedin.com/in/omar-mohsen-5547a7281/" target='_blank' className='socialLink' rel="noreferrer">
        <BsLinkedin className='linkicon linkedin' />
        </a>
        <a href="https://twitter.com/Omar07815749"  target='_blank'  className='socialLink' rel="noreferrer">
        <BsTwitter className='linkicon twitter' />
        </a>
        <ReactWhatsapp
          element="webview" // Add the required 'element' property
          number={`+201018593554`}
          message={`Hey,Omar`}
          className="socialLink"
        >
        <IoLogoWhatsapp className='linkicon whatapp' />
        </ReactWhatsapp>
        {/* <a href="whatsapp://send?abid=+201006928541"  target='_blank' className='socialLink' rel="noreferrer">
        </a> */}
        <a href="https://github.com/omar1mohsen"  target='_blank' className='socialLink' rel="noreferrer">
        <BsGithub className='linkicon github' />
        </a>
        <a href="mailto:omar33mohsen@gmail.com"  target='_blank' className='socialLink' rel="noreferrer">
        <BiLogoGmail className='linkicon gmail' />
        </a>
    </div>
  )
}

export default SocialNav
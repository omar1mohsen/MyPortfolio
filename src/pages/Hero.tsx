import React from "react";
import SocialNav from "../components/SocialNav";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";

function Home() {
  return (
    <section id="home" className="herosec">
      <SocialNav className="sideNav" />
      <div className="left-side">
        <img src={require("../assets/smallHero-.png")} loading="lazy" alt="developerImage" />
        <div className="content">
          <h1>HEY, I'M Omar mohsen</h1>
          <h1>HEY, I'M Omar mohsen</h1>
        </div>
        <h3>Frontend Developer</h3>
        <p>
          Highly skilled Frontend Web Developer creating exceptional user
          experiences. Committed to delivering visually stunning, user-friendly
          websites and web applications that drive product success.
        </p>
        <div className="bottom-side">
          <a
            href="./files/Omar Mohsen.pdf"
            download="Omar Mohsen.pdf"
            className="btn resumeBtn"
            rel="noreferrer"
          >
            Download Resume
            <AiOutlineArrowDown className="btn-arrow" />
          </a>
          <Link
            smooth={true}
            offset={5}
            duration={500}
            spy={true}
            to="about"
            className="btn"
          >
            About me
            <BsInfoCircleFill className="info-btn" />
          </Link>
        </div>
      </div>
      <div className="right-side">
        <img src={require("../assets/heroImage.png")} loading="lazy" alt="developerImage" />
      </div>
    </section>
  );
}

export default Home;

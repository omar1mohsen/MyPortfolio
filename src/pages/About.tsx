import React from "react";

function About() {
  const skills : string[] = [
    "ADOBE XD",
    "HTML5",
    "CSS",
    "BOOTSTRAP",
    "TAILWIND",
    "SCSS",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "PHP",
    "REACT",
    "NEXT JS",
    "REACT HOOKS",
    "FIREBASE",
    "REDUX",
    "GIT",
    "GITHUB",
    "MUI",
    "RECOIL",
    "FORMIK",
    "SEO"
  ];
  return (
    <section id="about" className="sec aboutsec">
      <h3 className="sec-title">ABOUT ME</h3>
      <p className="sec-dec">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </p>

      <div className="about-contanier">
        <div className="left-side">
          <h3>Get to know me!</h3>
          <p className="about-dec">
            I'm a <span className="main-word">Frontend Web Developer</span>{" "}
            building the Front-end of Websites and Web Applications that leads
            to the success of the overall product. Check out some of my work in
            the <span className="main-word">Projects</span> section.
          </p>
          <p className="about-dec">
            I also like sharing content related to the stuff that I have learned
            over the years in <span className="main-word">Web Development</span>{" "}
            so it can help other people of the Dev Community. Feel free to
            Connect or Follow me on my{" "}
            <a
              href="https://www.linkedin.com/in/omar-mohsen-5547a7281/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
            where I post useful content related to Web Development and
            Programming
          </p>
          <p className="about-dec">
            I'm open to <span className="main-word">Job</span> opportunities
            where I can contribute, learn and grow. If you have a good
            opportunity that matches my skills and experience then don't
            hesitate to <span className="main-word"><a href="#contact">contact</a></span> me.
          </p>
        </div>
        <div className="right-side">
          <h3>My Skills</h3>
          <div className="skills-contanier">
            {skills.map((skill,index) => (
              <div key={index} className="skill-item">{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

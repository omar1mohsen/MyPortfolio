import React, { useState } from "react";
import projects, { Project } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [projectsNumber, setProjectsNumber] = useState<number>(3);

  const handleMore = () => {
    if (projects.length > projectsNumber) {
      setProjectsNumber((prev) => prev + 3);
    }
  };

  return (
    <section id="projects" className="sec prtojectSec">
      <h3 className="sec-title">PROJECTS</h3>
      <p className="sec-dec">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </p>
      <div className="projectsContanier">
        {projects
          ?.slice(0, projectsNumber)
          .map((project: Project, index: number) => {
            return <ProjectCard key={index} project={project} />;
          })}
      </div>
      {projects.length > projectsNumber ? (
        <div className="moreBtn">
          <button className="btn" onClick={handleMore}>
            Show more
          </button>
        </div>
      ) : null}
    </section>
  );
}

export default Projects;

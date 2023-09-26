import React from "react";
import { Project } from "../data/projectsData";
import ProjectModel from "./ProjectModel";
function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="card">
        <div className="projectCard">
          <img src={project?.projectImage} alt={project.name} />
          <div className="projectDes">
            <span>personal</span>
            <h1>{project.name}</h1>
            <button onClick={() => handleOpen()}>caseStudy</button>
          </div>
        </div>
      </div>
      {open && (
        <ProjectModel open={open} handleClose={handleClose} project={project} />
      )}
    </>
  );
}

export default ProjectCard;

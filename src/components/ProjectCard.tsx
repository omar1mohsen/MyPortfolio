import React, { useState } from "react";
import { Project } from "../data/projectsData";
import ProjectModel from "./ProjectModel";
import loadingImg from "../assets/loading.gif"


function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = React.useState(false);
  const[loading,setLoading] = useState(true)
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLoading = ()=>{
    if(loading){
     return loadingImg
    }
    return project?.projectImage
  }

  return (
    <>
      <div
      className="card">
        <div className="projectCard">
          <img src={`${handleLoading()}`} loading="lazy" alt={project.name} onLoad={()=>{setLoading(false)}} />
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

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Project } from "../data/projectsData";
import { RiSpaceShipLine } from 'react-icons/ri';
import { BsGithub } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

const style = {
  bgcolor: "background.paper",
  boxShadow: 24,

};

export default function ProjectModel({
  open,
  handleClose,
  project,
}: {
  open: boolean;
  handleClose: () => void;
  project: Project;
}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      className="modal"
    >
      <Box  className="card">
          <AiOutlineCloseCircle onClick={handleClose} className="closeBtn"/>
        <div className="left-side">
        <img src={project.projectImage} loading="lazy" alt={project.name}/>
        <div className="links">
          {project.DemoLink !== "" ?
          <a href={project.DemoLink} target="_blank" className="link" rel="noreferrer">
            <RiSpaceShipLine className="icon deploy-icon" />
          </a>
          :
          <span className="error">sorry :)</span>
          }
          <a href={project.RepoLink} target="_blank" className="link" rel="noreferrer">
            <BsGithub className="icon" />
          </a>
        </div>
        </div>
        <div className="right-side">
        <h2>{project.name}</h2>
        <span className="title">Description</span>
        <hr />
        <p>{project.Description}</p>
        <span className="title">Technologies</span>
        <hr />
        <div className="skills-contanier">
            {project.Technologies.map(skill => (
              <div className="skill-item">{skill}</div>
            ))}
          </div>
        </div>
      </Box>
    </Modal>
  );
}

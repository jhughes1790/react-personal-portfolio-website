import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";


function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const newLink = project.link;
  console.log(newLink);
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="Project"/>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <p>
        <b>Link:</b> {project.link}
      </p>
      

      
    </div>
  );
}

export default ProjectDisplay;

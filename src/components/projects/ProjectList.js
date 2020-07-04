import React, {useContext} from "react";
import {Link} from "react-router-dom";

import Context from "../../store/Context";

import ProjectSummary from "./ProjectSummary";

export default function ProjectList(props) {

  const {projects} = useContext(Context); 

  const projectSummaryComponents = projects.map(project=> {
    return (
      <Link to={"/project/" + project.id} key={project.id}>
        <ProjectSummary title={project.title} content={project.content} />
      </Link>
    )
  })

  return (
    <div className="project-list section">

      {projectSummaryComponents}

    </div>
  )
}
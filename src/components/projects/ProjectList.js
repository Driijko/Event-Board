import React, {useContext} from "react";

import Context from "../../store/Context";

import ProjectSummary from "./ProjectSummary";

export default function ProjectList(props) {

  const {projects} = useContext(Context); 

  const projectSummaryComponents = projects.map(project=> {
    return <ProjectSummary key={project.id} title={project.title} content={project.content} />
  })

  return (
    <div className="project-list section">

      {projectSummaryComponents}

    </div>
  )
}
import React, {useContext} from "react";

import Context from "../../store/Context";

export default function ProjectDetails(props) {

  // Grab the unique part of the url string that pulls up a particular project.
  // In this case, it's a number. 
  const id = props.match.params.id;

  // Access our data and use the unique url string to find the particular project we want to view. 
  const {projects} = useContext(Context);
  const project = projects.find(project=> {
    return `${project.id}` === id;
  });

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{project.title}</span>
          <p>{project.content}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by DreeKo</div>
          <div>July 3rd, 2020, 1:40pm</div>
        </div>
      </div>
    </div>
  )
}
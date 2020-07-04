import React, {useContext} from "react";

import Context from "../../store/Context";




export default function ProjectDetails(props) {

  // ROUTING /////////////////////////////////////////////////////////////////////////////
  // Grab the unique part of the url string that pulls up a particular project.
  // In this case, it's a number. 
  const id = props.match.params.id;

  // DATA //////////////////////////////////////////////////////////////////////////////
  // Access our data and use the unique url string to find the particular project we want to view.
  const {projects} = useContext(Context);
  let project = null; 
  if (projects) {
    project = projects.find(project=> {
      return `${project.id}` === id;
    });
  }

  // RENDER ///////////////////////////////////////////////////////////////////////////////////
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {`${project.authorFirstName} ${project.authorLastName}`}</div>
            <div>{`${project.createdAt}`}</div>
          </div>
        </div>
      </div>     
    )
  }
  else {
    return (
      <div>LOADING DATA...</div>
    )
  }
}
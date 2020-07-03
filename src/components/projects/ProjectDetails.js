import React from "react";

export default function ProjectDetails(props) {

  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Description...</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by DreeKo</div>
          <div>July 3rd, 2020, 1:40pm</div>
        </div>
      </div>
    </div>
  )
}
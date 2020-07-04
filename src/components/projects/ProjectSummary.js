import React from "react";


export default function ProjectSummary(props) {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{props.title}</span>
        <p>Posted by Dreeko</p>
        <p className="grey-text">July 3rd, 1:30 pm</p>
      </div>
    </div>    
  )
}
import React from "react";
import {NavLink} from "react-router-dom";

export default function SignedInLinks(props) {
  return (
    <ul className="right">
      <li><NavLink to="/newproject">New Project</NavLink></li>
      <li><NavLink to="/">Log Out</NavLink></li>
      <li><NavLink to="/" className="btn btn-floating pink lighten-1">Dree</NavLink></li>
    </ul>
  )
}
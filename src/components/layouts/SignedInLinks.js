import React, {useContext} from "react";
import {NavLink} from "react-router-dom";

import Context from "../../store/Context";

export default function SignedInLinks(props) {

  const {signOut, initials} = useContext(Context);

  return (
    <ul className="right">
      <li><NavLink to="/newproject">New Project</NavLink></li>
      <li onClick={signOut}><NavLink to="/">Log Out</NavLink></li>
      <li><NavLink to="/" className="btn btn-floating pink lighten-1">{initials}</NavLink></li>
    </ul>
  )
}
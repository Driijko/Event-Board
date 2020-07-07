import React, {useContext} from "react";
import {Redirect} from "react-router-dom";

import Context from "../../store/Context";


import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";

export default function Dashboard(props) {

  const {signedIn} = useContext(Context);

  if (!signedIn) {
    return <Redirect to="/signIn" />
  }

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  )
}
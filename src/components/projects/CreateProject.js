// IMPORTS ////////////////////////////////////////////////////////////////////////////////////
import React, {useState, useContext} from "react";
import {Redirect} from "react-router-dom";

import Context from "../../store/Context";




export default function CreateProject(props) {

  // STATE ////////////////////////////////////////////////////////////////////////////////
  // GENERAL ///////////////////////////////////////
  // State: firstName, lastName
  // Action: addProject
  const {addProject, firstName, lastName, userID, signedIn} = useContext(Context);

  // LOCAL ////////////////////////////////////////
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [redirect, setRedirect] = useState(false);

  // EVENTS /////////////////////////////////////////////////////////////////////////////////
  function handleSubmit(e) {
    e.preventDefault();
    addProject({
      title: title, 
      content: content, 
      authorFirstName: firstName, 
      authorLastName: lastName,
      authorId: userID,
      createdAt: new Date()
    });
    setRedirect(true);
  }

  function handleChange(e) {
    if (e.target.id === "title") {
      setTitle(e.target.value);
    }
    else if (e.target.id === "content") {
      setContent(e.target.value);
    }
  }


  // RENDER ////////////////////////////////////////////////////////////////////////////
  if (redirect) {
    return (
      <Redirect to="/" />
    )
  }
  else if (signedIn === false) {
    return (
      <Redirect to="/signin" />
    )
  }
  else {
    return (
      <div className="container">
        <form onSubmit={handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea id="content" className="materialize-textarea" onChange={handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    )
  }  
}
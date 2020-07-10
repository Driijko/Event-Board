import React, {useState, useContext} from "react";
import {Redirect} from "react-router-dom";

import Context from "../../store/Context";

export default function CreateProject(props) {

  const {addProject, firstName, lastName, homeURL} = useContext(Context);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [redirect, setRedirect] = useState(false);


  function handleSubmit(e) {
    e.preventDefault();
    addProject({
      title: title, 
      content: content, 
      authorFirstName: firstName, 
      authorLastName: lastName,
      authorId: 1234,
      createdAt: new Date()
    });
    setRedirect(true);
    // setTitle("");
    // setContent("");
    // e.target[0].value = "";
    // e.target[1].value = "";
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
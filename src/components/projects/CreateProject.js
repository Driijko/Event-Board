import React, {useState, useContext} from "react";

import Context from "../../store/Context";

export default function CreateProject(props) {

  const {addProject} = useContext(Context);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    addProject({
      title: title, 
      content: content, 
      authorFirstName: "Dree", 
      authorLastName: "Ko",
      authorId: 12345,
      createdAt: new Date()
    });
    setTitle("");
    setContent("");
    e.target[0].value = "";
    e.target[1].value = "";
  }

  function handleChange(e) {
    if (e.target.id === "title") {
      setTitle(e.target.value);
    }
    else if (e.target.id === "content") {
      setContent(e.target.value);
    }
  }


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
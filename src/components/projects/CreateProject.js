import React, {useState} from "react";

export default function CreateProject(props) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(title, content);
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
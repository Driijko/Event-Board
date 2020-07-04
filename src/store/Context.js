import React, {createContext, useState, useEffect} from 'react';

// CREATE CONTEXT /////////////////////////////////////////////////////////////////////
const Context = createContext();

function ContextProvider(props) {

  const [projects, setProjects] = useState([
    {id: 1, title: "help me find Peach", content: "blah blah blah"},
    {id: 2, title: "collect all the stars", content: "blah blah blah"},
    {id: 3, title: "egg hunt with yoshi", content: "blah blah blah"}
  ]);

  useEffect(()=> {
    console.log(projects);
  }, [projects])

  function addProject(project) {
    setProjects(prev=> {
      return [
        project,
        ...prev
      ]
    })
  }

  return (
    <Context.Provider
      value={{projects, addProject}}
    >
      { props.children }
    </Context.Provider>
  )
}

// EXPORTS
export default Context;
export {ContextProvider};
import React, {createContext, useState, useEffect} from 'react';
import firebase from "../firebase";

// CREATE CONTEXT /////////////////////////////////////////////////////////////////////
const Context = createContext();

function ContextProvider(props) {

  const [projects, setProjects] = useState([
    {id: 1, title: "LOADING DATA...", content: "blah blah blah"}
  ]);

  // LOAD DATA FROM FIRESTORE ////////////////////////////////////////////////////////
  useEffect(()=> {
    firebase.firestore().collection("projects").onSnapshot(snapshot => {
      const newProjects = snapshot.docs.map((doc)=> {
        return (
          {
            id: doc.id,
            ...doc.data()
          }
        )
      }
    )
    setProjects(newProjects);
    })
  }, [])

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
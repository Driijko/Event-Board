import React, {createContext, useState, useEffect} from 'react';
import firebase from "../firebase";

// CREATE CONTEXT /////////////////////////////////////////////////////////////////////
const Context = createContext();

function ContextProvider(props) {

  // PROJECTS ////////////////////////////////////////////////////////////////////////////////////////

  // STATE //////////////////////////////////////
  const [projects, setProjects] = useState([
    {id: 1, title: "LOADING DATA...", content: "blah blah blah"}
  ]);

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

  // useEffect(()=> {
  //   console.log(projects);
  // }, [projects])

  // ACTIONS ////////////////////////////////////
  function addProject(project) {
    firebase.firestore().collection("projects").add(project).catch(err=> {
      console.log("something went wrong");
    })
  }

  // AUTHENTICATION //////////////////////////////////////////////////////////////////////////////////
  // STATE //////////////////////////////////////////////////////////////////////////////////////////
  const [signInStatus, setSignInStatus] = useState("signed out");

  // ACTIONS //////////////////////////////////
  function signIn(credentials) {
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    )
    .then(setSignInStatus("signed in"))
    .catch(err=> {
      setSignInStatus("failed");
    })

  }

  // PROVIDE CONTEXT /////////////////////////////////////////////////////////////////////////////////
  return (
    <Context.Provider
      value={{projects, addProject, signIn, signInStatus}}
    >
      { props.children }
    </Context.Provider>
  )
}

// EXPORTS
export default Context;
export {ContextProvider};
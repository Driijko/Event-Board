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
  // const [signInStatus, setSignInStatus] = useState("signed out");
  const [signedIn, setSignedIn] = useState(false);
  const [signInError, setSignInError] = useState(false);


  // ACTIONS //////////////////////////////////
  function signIn(credentials) {
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    )
    .then(setSignedIn(true))
    .catch(err=> {
      setSignInError(true);
      setSignedIn(false);
    })
  }

  function signOut() {
    firebase.auth().signOut()
    .then(setSignedIn(false));
  }

  // TRACK ////////////////////////////////////
  useEffect(()=> {
    console.log(signedIn);
  }, [signedIn])

  // PROVIDE CONTEXT /////////////////////////////////////////////////////////////////////////////////
  return (
    <Context.Provider
      value={{projects, addProject, signIn, signedIn, signOut, signInError}}
    >
      { props.children }
    </Context.Provider>
  )
}

// EXPORTS
export default Context;
export {ContextProvider};
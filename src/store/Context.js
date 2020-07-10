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
  // const [signInError, setSignInError] = useState(false);
  const [signUpError, setSignUpError] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [initials, setInitials] = useState(null);


  // ACTIONS //////////////////////////////////
  async function signUp(newUser) {
    const res = await firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
    firebase.firestore().collection("users").doc(res.user.uid).set({
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      initials: newUser.firstName[0] + newUser.lastName[0]     
    });
    setSignedIn(true);
    console.log(newUser.firstName);
    setFirstName(newUser.firstName);
    setLastName(newUser.lastName);
    setInitials(newUser.firstName[0] + newUser.lastName[0]);
  }

  // function signIn(credentials) {
  //   firebase.auth().signInWithEmailAndPassword(
  //     credentials.email,
  //     credentials.password
  //   )
  //   .then(()=> {
  //     setSignedIn(true);
      
  //   })
  //   .catch(err=> {
  //     setSignInError(true);
  //     setSignedIn(false);
  //   })
  // }

  async function signIn(credentials) {

    let signInError = false;

    try {
      const userAuth = await firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      );
      setSignedIn(true);
      const userData = await (await firebase.firestore().collection("users").doc(userAuth.user.uid).get()).data();
      setFirstName(userData.firstName);
      setLastName(userData.lastName);
      setInitials(userData.initials);
    }
    catch (error) {
      console.log(error);
      signInError = true;
    }
  }

  function signOut() {
    firebase.auth().signOut()
    .then(setSignedIn(false));
  }

  // TRACK ////////////////////////////////////
  // useEffect(()=> {
  //   console.log(signedIn);
  //   console.log(firstName);
  //   console.log(lastName);
  //   console.log(initials);
  //   // console.log(firebase.auth());
  // }, [initials])

  // PROVIDE CONTEXT /////////////////////////////////////////////////////////////////////////////////
  return (
    <Context.Provider
      value={{projects, addProject, signIn, signedIn, signOut, signUp, signUpError, firstName,
      lastName, initials}}
    >
      { props.children }
    </Context.Provider>
  )
}

// EXPORTS
export default Context;
export {ContextProvider};
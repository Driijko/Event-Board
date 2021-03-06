import React, {useState, useContext} from "react";
import {Redirect} from "react-router-dom";

import Context from "../../store/Context";

export default function SignUp(props) {

  // STATE /////////////////////////////////////////////////////////////////////////////
  // GENERAL ///////////////////////////////////////
  // State: signedIn
  // Action: signUp
  const {signedIn, signUp} = useContext(Context);

  // LOCAL ////////////////////////////////////////
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // EVENTS /////////////////////////////////////////////////////////////////////////////
  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    }
    signUp(newUser);
  }

  function handleChange(e) {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    }
    else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
    else if (e.target.id === "firstName") {
      setFirstName(e.target.value);
    }
    else if (e.target.id === "lastName") {
      setLastName(e.target.value);
    }
  }

  // RENDER ////////////////////////////////////////////////////////////////////////

  if (signedIn) {
    return <Redirect to="/signIn" />
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
        </div>
      </form>
    </div>
  )
}
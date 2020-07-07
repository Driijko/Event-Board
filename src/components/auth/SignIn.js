// IMPORTS /////////////////////////////////////////////////////////////////////////////////////////
import React, {useState, useContext} from "react";

import Context from "../../store/Context";




export default function SignIn(props) {

  // STATE ///////////////////////////////////////////////////////////////////////////////////
  // GENERAL //////////////////////////////////////
  // Actions
  const {signIn, signInStatus} = useContext(Context);

  // LOCAL ///////////////////////////////////////  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // EVENTS ///////////////////////////////////////////////////////////////////////////////////
  function handleSubmit(e) {
    e.preventDefault();
    signIn({email, password});
  }

  function handleChange(e) {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    }
    else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  }

  // RENDER ///////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
          {signInStatus === "failed" ? <div className="red-text center">{signInStatus}</div>: null}
        </div>
      </form>
    </div>
  )
}
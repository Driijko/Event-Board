// IMPORTS ////////////////////////////////////////////////////////////////////////////
// From node packages
import React, {useContext} from "react";
import {Link} from "react-router-dom";

// Context
import Context from "../../store/Context";

// Components
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";




export default function NavBar(props) {

  // STATE ////////////////////////////////////////////////////////////////////
  const {signInStatus} = useContext(Context);

  // RENDER ///////////////////////////////////////////////////////////////////
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo left">MarioPlan</Link>
        {signInStatus === "signed in" ?
          <SignedInLinks />
          : <SignedOutLinks />
        }
      </div>
    </nav>
  )
}
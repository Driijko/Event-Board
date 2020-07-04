import React from "react";
import {Link} from "react-router-dom";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

export default function NavBar(props) {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo left">MarioPlan</Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  )
}
import React from "react";
import {Link} from "react-router-dom";

export default function NavBar(props) {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">MarioPlan</Link>
      </div>
    </nav>
  )
}
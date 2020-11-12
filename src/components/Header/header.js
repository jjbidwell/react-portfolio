import React from "react";
import {NavLink} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import "jquery/dist/jquery.js"
import "popper.js";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <NavLink to="/about" className="navbar-brand">Joshua Bidwell</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
      <li className="nav-item">
          <NavLink className="nav-link" activeclassname="active" to="about">About</NavLink>
        </li>  
        <li className="nav-item">
          <NavLink className="nav-link" activeclassname="active" to="portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeclassname="active" to="contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" activeclassname="active" target="_blank" rel="noreferrer" href="https://github.com/jjbidwell">GitHub</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" activeclassname="active" target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/18Ew5gcgIyeOL1FERaQzkfo1csB0VbhD6G2Qfk3lTYio/">My Resume</a>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Header;

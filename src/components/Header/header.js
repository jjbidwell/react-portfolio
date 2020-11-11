import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import "jquery/dist/jquery.js"
import "popper.js";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a href="https://jjbidwell.github.io/responsive-portfolio/" class="navbar-brand">Joshua Bidwell</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
            <a class="nav-link" href="https://jjbidwell.github.io/responsive-portfolio/">About</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="portfolio.html">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" target="_blank" href="https://github.com/jjbidwell">GitHub</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" target="_blank" href="assets/Resume.pdf">My Resume</a>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Header;

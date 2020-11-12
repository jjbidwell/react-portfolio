import React from "react";
import {NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"


function Footer() {
  return (
    <footer className="text-center border-top border-dark footer bg-light fixed-bottom">
        <div className="container pt-4">
            <span>
                <NavLink className="footer-text footer-link" to="about"> About </NavLink>
                 | 
                <NavLink className="footer-text footer-link" to="portfolio"> Portfolio </NavLink>
                 | 
                <NavLink className="footer-text footer-link" to="contact"> Contact </NavLink>
            </span>
            <p className="footer-text">	&copy; 2020</p>
        </div>
    </footer>
  );
}

export default Footer;

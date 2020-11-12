import React from "react";
import "bootstrap/dist/css/bootstrap.css"


function Footer() {
  return (
    <footer className="text-center border-top border-dark footer bg-light fixed-bottom">
        <div className="container pt-4">
            <span>
                <a className="footer-text footer-link" href="https://jjbidwell.github.io/responsive-portfolio/"> About </a>
                 | 
                <a className="footer-text footer-link" href="portfolio.html"> Portfolio </a>
                 | 
                <a className="footer-text footer-link" href="contact.html"> Contact </a>
            </span>
            <p className="footer-text">	&copy; 2020</p>
        </div>
    </footer>
  );
}

export default Footer;

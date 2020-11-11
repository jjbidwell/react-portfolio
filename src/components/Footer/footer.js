import React from "react";
import "bootstrap/dist/css/bootstrap.css"


function Footer() {
  return (
    <footer class="text-center border-top border-dark footer bg-light fixed-bottom">
        <div class="container pt-4">
            <span>
                <a class="footer-text footer-link" href="https://jjbidwell.github.io/responsive-portfolio/"> About </a>
                 | 
                <a class="footer-text footer-link" href="portfolio.html"> Portfolio </a>
                 | 
                <a class="footer-text footer-link" href="contact.html"> Contact </a>
            </span>
            <p class="footer-text">	&copy; 2020</p>
        </div>
    </footer>
  );
}

export default Footer;

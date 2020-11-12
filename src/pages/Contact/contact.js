import React from "react";
import { FaFacebookSquare, 
         FaTwitterSquare,
         FaInstagramSquare, 
         FaLinkedinIn, 
         FaEnvelope, 
         FaPhoneAlt } 
         from "react-icons/fa";


function Contact(){
    return (
        <div>
            <main className="container rounded bg-light mt-5 p-4">
            <h1 className="border-bottom pt-3 pb-3">Contact Me</h1>
            <div className="row">
            <div className="col-lg-8">
                <form>
                <div className="row">
                    <div className="col-lg-6">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="email" className="form-control" id="name" name="name"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" name="email"/>
                        </div>
                    </div>
                    </div>
                    <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" name="message" id="message" rows="8"></textarea>
                    </div>
                    <button type="submit" id="submit" className="btn btn-lg">Submit</button>
                </form>
            </div>
            
            <aside className="border-left col-lg-4">
                <div className="m-1 row">
                <h3 className="border-bottom">Social Media</h3>
                </div>
                <div className="ml-3 mb-1 row">
                <a href="https://www.facebook.com/joshua.j.bidwell" target="_blank" rel="noreferrer" className="portfolio-link"><FaFacebookSquare/> Facebook</a>
                </div>
                <div className="ml-3 mb-1 row"> 
                <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="portfolio-link"><FaTwitterSquare/> Twitter</a>
                </div>
                <div className="ml-3 mb-1 row">
                <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noreferrer" className="portfolio-link"><FaInstagramSquare/> Instagram</a>
                </div>
                <div className="ml-3 mb-1 row">
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="portfolio-link"><FaLinkedinIn/> LinkedIn</a>
                </div>
                <div className="ml-3 mb-1 row">
                <a href="mailto:jjbidwell262@gmail.com" target="_blank" rel="noreferrer" className="portfolio-link"><FaEnvelope/> Email</a>
                </div>
                <div className="ml-3 mb-1 row">
                <p className="portfolio-link"><FaPhoneAlt/> Phone: 760-780-8677</p>
                </div>
            </aside>
            </div>
        </main>
        <br/>
        <br/>
        <br/>
      </div>
    )
}
export default Contact;
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
import Header from "../src/components/Header/header"
import Wrapper from "../src/components/Wrapper/wrapper"
import Footer from "./components/Footer/footer";
import About from "./pages/About/about";
import Portfolio from "./pages/Portfolio/portfolio";
import Contact from "./pages/Contact/contact";

class App extends Component {
render(){
  return (
    <div>
    <Router>
      <Header/>

          <Route exact path="/">
            <Redirect to="/about" />
          </Route>
          <Route exact path="/about">
          <About />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio/>
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
             
    <Footer/>
    </Router>
    </div>
  );
}
}

export default App;

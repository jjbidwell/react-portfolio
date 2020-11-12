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
        <Wrapper>
          <Route exact path="/">
            <Redirect to="/about" />
          </Route>
          <Route path="/about">
          <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio/>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          </Wrapper>
    <Footer/>
    </Router>
    </div>
  );
}
}

export default App;

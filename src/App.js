import React, { Component } from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
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
          <Switch>
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
          </Switch>
        </Wrapper>
    <Footer/>
    </Router>
    </div>
  );
}
}

export default App;

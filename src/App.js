import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
import Header from "../src/components/Header/header"
import Wrapper from "../src/components/Wrapper/wrapper"
import Footer from "./components/Footer/footer";
import About from "./pages/About/about"
import Portfolio from "./pages/Portfolio/portfolio"

function App() {
  return (
    <div>
    <Router>
      <div>
        <Header/>
        <Wrapper>
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
            
          </Route>
        </Wrapper>
      </div>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;

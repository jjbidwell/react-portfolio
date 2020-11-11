import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
import Header from "../src/components/Header/header"
import Wrapper from "../src/components/Wrapper/wrapper"

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Wrapper>
          <Route exact path="/">
            <Redirect to="/" />
          </Route>
          <Route exact path="/portfolio">
            
          </Route>
          <Route exact path="/contact">
            
          </Route>
        </Wrapper>


      </div>
    </Router>
  );
}

export default App;

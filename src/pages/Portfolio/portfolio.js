import React from "react";
import Project from "../../components/Project/project"


function Portfolio(){
    return (
    <main className="container rounded bg-light mt-5 p-4">
      <h1 className="border-bottom pt-3 pb-3">Portfolio</h1>
      <a href="https://github.com/jjbidwell" className="github-link text-center border-bottom pt-3 pb-3">My Github Profile</a>
        <Project/>
      <br/>
      <br/>
      <br/>

    </main>
    )
}


export default Portfolio;
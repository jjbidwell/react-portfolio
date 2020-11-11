import React from "react";
import profile from "../../assets/images/profile.jpg"


function Description(){
    return (
    <div>  
        <main className="container rounded bg-light mt-5 p-5">
        <h1 className="border-bottom pt-3 pb-3">About Me</h1>
        <img src={profile} className="ml-1 mr-3 rounded-circle float-left w-25" alt="Me" />
        <p className="about-me">My name is Joshua Bidwell, and I'm a web developer based out of San Diego, California.</p>
        <p className="about-me">My experience in web development began after I left a teaching job and started teaching myself HTML and CSS. After I decided it's what I wanted to do as a career, I signed up for the UCSD
                            coding bootcamp. Since then, I have been working as a freelance web developer.</p>
        <p className="about-me">Outside of development, my hobbies include reading, playing music, hiking, watching movies, playing video games, and playing board games. I also have an interest in specialty coffee, and
                            am happy to recommend some of my favorite roasters to anyone who asks. </p>
        <p className="about-me">If you would like to see some of my other work, please make sure to check out my <a class="bio-link" href="/portfolio" target="_blank">portfolio</a> page. I am knowledgeable in HTML and CSS,
                             and can work with many popular css frameworks such as Bootstrap or Semantic UI. Please don't hesitate to <a class="bio-link" href="/contact" target="_blank">contact me</a> if you have any questions!</p>
</main>
<br/>
<br/>
<br/>
</div>  
    )
}
export default Description;
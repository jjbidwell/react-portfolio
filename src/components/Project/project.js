import React from "react";

function Project(){
    const projects = [
        {
            name: "Weather Dashboard",
            image: "https://jjbidwell.github.io/responsive-portfolio/assets/images/weather-dashboard.png",
            url: "https://jjbidwell.github.io/weather-dashboard/"
        },
        {
            name: "Password Generator",
            image: "https://jjbidwell.github.io/responsive-portfolio/assets/images/password.png",
            url: "https://jjbidwell.github.io/password-generator/"
        },
        {
            name: "Work Day Scheduler",
            image: "https://jjbidwell.github.io/responsive-portfolio/assets/images/scheduler.png",
            url: "https://jjbidwell.github.io/work-day-planner/"
        },
        {
            name: "Dr. Magnificent's Fortunes",
            image: "https://jjbidwell.github.io/responsive-portfolio/assets/images/tarot.png",
            url: "https://christopher-cruzcosa.github.io/life-reading-app/"
        },
        {
            name: "Let's Hike",
            image: "https://jjbidwell.github.io/responsive-portfolio/assets/images/lets-hike.png",
            url: "https://cryptic-shelf-56462.herokuapp.com/"
        },
        {
            name: "Note Taker",
            image: "https://jjbidwell.github.io/responsive-portfolio/assets/images/note-taker.png",
            url: "https://peaceful-brook-13821.herokuapp.com/"
        },

    ];

    let rowNumbers = [];
    let rows = []
    let count = 0;
    for (let i = 0; i < Math.floor(projects.length/3); i++){
            rowNumbers.push("");
    }

    for (let i = 0; i < 2; i++){
        rows.push([
            projects[count], projects[count+1], projects[count+2]
        ])
        count = count + 3; 
    }

    //console.log(rows);
    
    return (
        <div>
            {rowNumbers.map((element, index) => {   
                return <div className = "m-4 row">
                    {rows[index].map((element, index) => 
                               <div className="col-lg-4 col-md-4 col-s-12">
                               <div className="card mb-2">
                                 <a className="portfolio-link" href={element.url} target="_blank" rel="noreferrer">
                                   <div className="img-container">
                                     <img src={element.image} className="img-zoom card-img-top" alt={element.name}/>
                                   </div>
                                   <div className="card-body text-center">
                                    <p className="card-title">{element.name}</p>
                                   </div>
                                 </a>
                               </div>
                             </div>
                    )}
                </div>
            })}
        </div>
    )
}
export default Project;
import React from "react";
import "./Profile.css";
import portfolio from "../assets/images/portfolio.png";
import html5 from "../assets/images/html5.svg";
import css3 from "../assets/images/css3.svg";
import JavaScript from "../assets/images/JavaScript.svg";
import MySQL from "../assets/images/MySQL.svg";
import node from "../assets/images/node.svg";
import react from "../assets/images/react.svg";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-name">
        <div className="name">
          <h1>Aaron Moua</h1>
        </div>
      </div>
      <div className="job-title">
        <h2>Software Developer</h2>
      </div>

      <figure className="profile-pic">
        <img src={portfolio} alt="" />
      </figure>

      <div className="profile-info">
        <br />
        <h1>About Me</h1>
          
          <p>
          Hi my name is Aaron and I am a Software Developer based in Charlotte,
          NC. I began this journey back in the fall of 2020.
          </p>
          <br/>
          <p>
          I plan to expand my career as a future Full-Stack Developer. I also Love fishing,
          hiking, fitness and aquarium keeping as some hobbies.
        </p>
        
      </div>

      <div className="language-icons">
      
      <img src={html5} alt="" />
      <img src={css3} alt="" />
      <img src={JavaScript} alt="" />
      <img src={MySQL} alt="" />
      <img src={node} alt="" />
      <img src={react} alt="" />
      </div>
    </div>
  );
}

export default Profile;

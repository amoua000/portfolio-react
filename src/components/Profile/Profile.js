import React from "react";
import "./Profile.css";
import portfolio from "../assets/images/portfolio.png";

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
          {" "}
          Hi my name is Aaron and I am a Software Developer based in Charlotte,
          NC. I began this journey back in the fall of 2020 and it all began
          with Road to Hire giving me a great opportunity.
        </p>
        <br/>
        <p>
          I have always been surrounded by technology and continue to grow with
          it. I plan on continuing my career as a future Full-Stack Developer. I
          also Love fishing, hiking, fitness and aquarium keeping as some
          hobbies.{" "}
        </p>
      </div>
    </div>
  );
}

export default Profile;

import React from "react";
import me1 from "../../../assets/me1.jpg";
import "./about.css";
function About(props) {
  return (
    <div className="wrapper">
      <div className="about--container">
        <div className="about--heading">
          <h3>Hello!</h3>
          <h4>I am Sabina Ceja-Siete</h4>
        </div>
        <div className="about--img">
          <img src={me1} alt="about" />
        </div>
        <div className="about--text">
          <p>
            {" "}
            Developer who is just getting
            started with this exciting technology. I am an avid learner and always looking to expand my knowledge and expertise in the field of web development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
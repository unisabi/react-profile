import React from "react";
import me1 from "../../../assets/me1.png";
import "./About.css";
function About(props) {
  return (
    <div className="wrapper">
      <div className="about--container">
        <div className="about--heading">
          <h3>Hi</h3>
          <h4>I am Sabina Ceja-Siete</h4>
        </div>
        <div className="about--img">
          <img src={me1} alt="about" />
        </div>
        <div className="about--text"></div>
        <p>
            {" "}
            uni!
          </p>
        </div>
      </div>
  );
}

export default About;
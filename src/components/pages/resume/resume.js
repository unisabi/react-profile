import React from "react";
import { skills } from "./resume-dataJ";
import Card from "./card";

import "../resume/resume.css";
function Resume(props) {
  const skillCards = skills.map((skill) => {
    return (
      <Card
        key={skill.id}
        name={skill.name}
        level={skill.level}
        progress={skill.progress}
      />
    );
  });
  return (
    <div className="wrapper">
      <div className="resume--container">
        <div className="resume--header">
          <a href="#" className="btn btn--fill" download>
            Download CV
          </a>
        </div>
        <div className="resume--body">{skillCards}</div>
      </div>
    </div>
  );
}

export default Resume;
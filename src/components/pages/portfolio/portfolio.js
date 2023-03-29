import React from "react";
import Card from "./card";
import { projects } from "./portfolio-data";
import "./portfolio.css";
function Portfolio() {
  const projectElement = projects.map((project) => {
    return (
      <Card
        key={project.id}
        img={project.img}
        title={project.title}
        description={project.description}
        github={project.github}
        live={project.live}
      />
    );
  });
  return (
    <div className="wrapper">
      <div className="portfolio--container">{projectElement}</div>
    </div>
  );
}

export default Portfolio;

import React from "react";

function Card(props) {
  return (
    <div className="card--back">
      <div className="portfolio--card">
        <div className="portfolio--card--img">
          <img src={props.img} alt="" />
        </div>
        <div className="portfolio--card--content">
          <h4>{props.title}</h4>
          <h5>{props.description}</h5>
        </div>
        <div className="portfolio--action">
          <a
            href={props.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn--outline"
          >
            GitHub
          </a>
          <a
            href={props.live}
            target="_blank"
            rel="noreferrer"
            className="btn btn--fill"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;

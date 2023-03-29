import React from "react";
import { MdVerified } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";
function Card(props) {
  return (
    <div className="skill--card">
      <span className="skill--header">
        {props.level !== "Experienced" ? <MdOutlineVerified /> : <MdVerified />}
        <h3>{props.name}</h3>
      </span>
      <h5>{props.level}</h5>
      <span className="skill--progress">
        <div className="progress--bar">
          <div
            style={{ width: props.progress }}
            className="progress--bar--inner"
          ></div>
        </div>
        <h5>{props.progress}</h5>
      </span>
    </div>
  );
}

export default Card;


import React from "react";
import "./footer.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrStackOverflow } from "react-icons/gr";
function Footer(props) {
  return (
    <div className="footer--container">
      <div className="footer--left">
        <div className="footer--item">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <AiFillGithub className="react--icons" />
          </a>
        </div>
        <div className="footer--item">
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <AiFillLinkedin className="react--icons" />
          </a>
        </div>
        <div className="footer--item">
          <a
            href="https://twitter.com/?lang=en"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterCircle className="react--icons" />
          </a>
        </div>
        <div className="footer--item">
          <a href="https://stackoverflow.com/" target="_blank" rel="noreferrer">
            <GrStackOverflow className="react--icons" />
          </a>
        </div>
      </div>
      <div className="footer--right">
        <div className="footer--item">
          &copy; {new Date().getFullYear()} Sabina Ceja-Siete
        </div>
      </div>
    </div>
  );
}

export default Footer;

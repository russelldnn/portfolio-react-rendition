import React from "react";
import githubIcon from "../assets/icons/github.png";
import linkedinIcon from "../assets/icons/linkedin.png";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <a
          href="https://github.com/russelldnn"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="icon" src={githubIcon} alt="an icon depicting github logo" />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/russell-dunn"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="icon" src={linkedinIcon} alt="an icon depicting linkedin logo" />
        </a>
      </div>
      <p className="copyright">RDunn</p>
    </div>
  );
}
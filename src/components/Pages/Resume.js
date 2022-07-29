import React from "react";
import Res from "../../assets/resume/Resume_wwt.pdf";
import downloadIcon from "../../assets/icons/download.png";

export default function Resume() {
  return (
    <div>
      <h2 className="title">Resume</h2>
      <div className="resume-div">
        <div className="skill-div">
          
          <div className="skill">
            <h2>Skills</h2>
            <div className="tag">
                <span>React</span>
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Bootstrap</span>
                <span>Bulma</span>
                <span>Github</span>
                <span>Heroku</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MySQL</span>
                <span>Sequelize</span>
                <span>MongoDB</span>
                <span>Mongoose</span>
              
            </div>
          </div>

        </div>
        
        <a href={Res} download className="download">
          Download Resume
          <img
            alt="download"
            style={{ display: "inline" }}
            src={downloadIcon}
            className="download-icon"
          />
        </a>
      </div>
    </div>
  );
}
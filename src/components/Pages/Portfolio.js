import React from "react";
import Project from "../Project";
// import images
import Ecom from "../../assets/images/Ecommerce.png";
import JATE from "../../assets/images/JATE.PNG";
import NoSQL from "../../assets/images/NoSQL.png";
import Note from "../../assets/images/NoteTaker.PNG";
import ReadMeGen from "../../assets/images/readmegen.PNG";
import Team from "../../assets/images/TeamProfile.PNG";

export default function Portfolio() {
  const projects = [
    {
      title: "Ecommerce Backend ",
      description:
        "An ecommerce back end using sequelize",
      image: Ecom,
      github: "https://github.com/russelldnn/E-commerce-back-end",
      deploy: "https://www.youtube.com/watch?v=FlHyDUg7WEs",
    },
    {
      title: "Just Another text editor",
      description:
        "A browser based text editor with saving and offline features",
      image: JATE,
      github: "https://github.com/russelldnn/PWA-Text-Editor",
      deploy: "https://pwa-text-editor-russelldunn.herokuapp.com/",
    },
    {
      title: "NoSQL Social Network Backend",
      description:
        "A social network backend using mongo db and mongoose, allows for reactions and friending",
      image: NoSQL,
      github: "https://github.com/russelldnn/NoSql-Social-Network",
      deploy: "https://www.youtube.com/watch?v=yTZvYQZVJl4",
    },

    {
      title: "Note Taker",
      description: "Note taking app that allows for quick note creation",
      image: Note,
      github: "https://github.com/russelldnn/Note-Taker",
      deploy: "https://note-taker-russelldnn.herokuapp.com/",
    },
    {
      title: "ReadME generator",
      description: "A terminal based readME generator using inquirer prompts",
      image: ReadMeGen,
      github: "https://github.com/russelldnn/ReadMe_Generator",
      deploy: "https://youtu.be/yf2-CGIBPzE",
    },
    {
      title: "Team Profile generator",
      description: "A terminal based teammate information profile generator",
      image: Team,
      github: "https://github.com/russelldnn/Team-Profile-Generator",
      deploy: "https://youtu.be/ESxAPvO0MrE",
    },
  ];

  const projectItem = projects.map((projects) => (
    <Project
      key={projects.title}
      title={projects.title}
      description={projects.description}
      image={projects.image}
      github={projects.github}
      deploy={projects.deploy}
    />
  ));

  return (
    <div>
      <h2 className="title">Projects</h2>
      <div className="row project">{projectItem}</div>
    </div>
  );
}
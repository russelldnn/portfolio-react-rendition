import React from "react";
import webIcon from "../../assets/icons/userIcon.png";
import Footer from "../Footer";



export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="intro">
          <h1 className="homeInfo">Portfolio</h1>
          <h2 className="homeName">Russell Dunn</h2>
          <h3 className="homeDest">Use the navbar to move around</h3>
        <div>
            <img src={webIcon} className="webicon" alt="icon depicting user" />{" "}
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
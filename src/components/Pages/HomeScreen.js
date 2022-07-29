import React from "react";
import webIcon from "../../assets/icons/web.png";
import Footer from "../Footer";



export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="intro">
          <h1 className="hi">Hello This is my portfolio</h1>
          <h3 className="hi">Use the navbar to move around</h3>
        <div>
            <img src={webIcon} className="webicon" alt="icon depicting web development" />{" "}
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
import React from "react";
import "./intro.scss";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Intro() {
  const { text } = useTypewriter({
    words: ["Treasure Hunter", "Freelancer", "Web Developer", "Artist"],
    loop: 0,
    typeSpeed: 100,
    delaySpeed: 1500,
  });

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/drake-clear.png" alt="profile" />
          {/* <img src="assets/drake-clear.png" alt="profile" /> */}
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Nathan Drake</h1>
          <h3>
            Aspiring <span>{text}</span>
            <Cursor />
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down-arrow.png" alt="down arrow" />
        </a>
      </div>
    </div>
  );
}

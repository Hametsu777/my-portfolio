import React from "react";
import "./menu.scss";

// Come back to this and make this a component to make the code more neat
// and structured. Shouldn't be writing the same function.
export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href="#intro">Home</a>
        </li>
        <li
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href="#portfolio">Portfolio</a>
        </li>
        <li
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href="#works">Works</a>
        </li>
        <li
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href="#testimonials">Testimonials</a>
        </li>
        <li
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

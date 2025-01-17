import React from "react";
import "./topbar.scss";
import { Person, Mail } from "@mui/icons-material";
//import PersonIcon from "@mui/icons-material/Person";
//import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+1 (233) 425-6768</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>NathanDrake@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div
            className="hamburger"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

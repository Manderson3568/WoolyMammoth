import logoWhite from "../images/michaelLogo.png";
import logoBlack from "../images/michaelLogoBlack.png";
import { useState } from "react";
import "./NavbarStyles.css";
const Navbar = ({ dark = false }) => {
  return (
    <nav>
      <div className="navLeft">
        <img
          src={dark ? logoWhite : logoBlack}
          className="logo"
          alt="Michael Logo"
        />
        <p className="companyName">michael</p>
      </div>
      <div className="navRight">
        <a href="#" className={`navLink ${dark ? "white" : "black"} `}>
          About me
        </a>
        <a href="#" className={`navLink ${dark ? "white" : "black"} `}>
          Projects
        </a>
        <a href="#" className={`navLink ${dark ? "white" : "black"} `}>
          Blogs
        </a>
        <a href="#" className={`navLink ${dark ? "white" : "black"} `}>
          Contact Me
        </a>
      </div>
    </nav>
  );
};
export default Navbar;

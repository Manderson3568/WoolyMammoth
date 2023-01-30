import logoWhite from "../images/michaelLogo.png";
import logoBlack from "../images/michaelLogoBlack.png";
import { useState } from "react";
import { BsX } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import "./NavbarStyles.css";
const Navbar = ({ sticky = false, display, dark = false }) => {
  const [active, setActive] = useState(false);
  return (
    <nav
      className={`${sticky ? "sticky" : ""} ${display ? "display" : ""} ${
        dark ? "dark" : "light"
      }`}
    >
      <div className="container">
        <div className={`navLeft ${active ? "active" : ""}`}>
          <img
            src={dark ? logoWhite : logoBlack}
            className="logo"
            alt="Michael Logo"
          />
          {!sticky ? <p className="companyName">michael</p> : <div></div>}
        </div>
        <div className={`navRight ${active ? "active" : ""}`}>
          <div className="links">
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
          <div className="navFooter">
            <h3>get in touch</h3>
            <a href="mailto:manderson3568@gmail.com">manderson3568@gmail.com</a>
            <a href="tel:+61430152780">0430 152 780</a>
          </div>
        </div>
        <div className={`activator ${active ? "white" : "black"}`}>
          {active ? (
            <BsX
              size={36}
              onClick={() => {
                setActive(false);
                document.body.classList.remove("menuActive");
              }}
            />
          ) : (
            <FaEquals
              size={36}
              onClick={() => {
                setActive(true);
                document.body.classList.add("menuActive");
              }}
            />
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

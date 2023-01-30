import "./FooterStyles.css";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import instagram from "../images/instagram.svg";

const Footer = ({ dark = false }) => {
  return (
    <div className="footer">
      <div className="socials">
        <a href="#" className="social">
          <img src={`${facebook}`} alt="facebook" />
        </a>
        <a href="#" className="social">
          <img src={`${twitter}`} alt="twitter" />
        </a>
        <a href="#" className="social">
          <img src={`${linkedin}`} alt="linkedin" />
        </a>
        {/* <a href="#" className="social"> */}
        <img src={`${instagram}`} alt="instagram" />
        {/* </a> */}
      </div>
      <div className={`miniNav ${dark ? "white" : "black"}`}>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Work</a>
        <a href="#">Contact</a>
      </div>
      <div className="rights">
        <p>© 2023 All rights reserved.</p>
      </div>
    </div>
  );
};
export default Footer;

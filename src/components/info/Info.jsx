import BlueButton from "../blueButton/BlueButton";
import SymbolHeading from "../symbolHeading/SymbolHeading";
import "./InfoStyles.css";
import { useState, useEffect, useRef } from "react";
const Info = ({ dark }) => {
  const [visible, setVisible] = useState(false);
  const infoBox = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    });
    observer.observe(infoBox.current);
  });
  return (
    <div className="info section">
      <div className={`left ${dark ? "dark" : "light"}`}>
        <div className="infoCont">
          <div className="address">
            <SymbolHeading text={"Speaking Events"} />
            <ul>
              <li>Roro Sydney</li>
              <li>November 2022</li>
            </ul>
          </div>
          <div className="email">
            <SymbolHeading
              text={"Instructional Assistant @ General Assembly"}
            />
            <ul>
              <li>React JS Part time course </li>
              <li>Software Engineering Immersive Flex</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`right ${dark ? "light" : "dark"} ${
          visible ? "active" : ""
        }`}
        ref={infoBox}
      >
        <p className="header">
          If you have made it this far you must be convinced
        </p>
        <p>
          Thank you for taking the time to learn more about me and my work. If
          you have a project you'd like to collaborate on, or just want to say
          hello, please don't hesitate to reach out. I'm always looking for new
          opportunities to grow and expand my skill set, and I would love to
          hear from you.
        </p>
        <BlueButton text={"Zoom or coffee date"} />
      </div>
    </div>
  );
};
export default Info;

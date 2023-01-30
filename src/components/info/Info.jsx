import BlueButton from "../blueButton/BlueButton";
import SubHeading from "../subHeading/SubHeading";
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
            <SymbolHeading text={"Future Watering Hole"} />
            <ul>
              <li>85 William St,</li>
              <li>Darlinghurst, NSW</li>
              <li>2010, Australia</li>
              <li>
                <a href="#">Directions</a>
              </li>
            </ul>
          </div>
          <div className="email">
            <SymbolHeading text={"Say G'day"} />
            <a href="mailto:manderson3568@gmail.com">manderson3568@gmail.com</a>
          </div>
        </div>
        <p className="game">Pokemon Gold Record: 249 pokemon</p>
      </div>
      <div
        className={`right ${dark ? "light" : "dark"} ${
          visible ? "active" : ""
        }`}
        ref={infoBox}
      >
        <p className="header">
          Already in phase 1 interviews?
          <br />
          Dont sweat it, this ain't my first rodeo.
        </p>
        <p>
          Drop me a line and I'll find a way to be available at your
          convenience. Otherwise hit me up on{" "}
          <a href="mailto:manderson3568@gmail.com">manderson3568@gmail.com</a>
        </p>
        <BlueButton text={"Zoom or coffee date"} />
      </div>
    </div>
  );
};
export default Info;

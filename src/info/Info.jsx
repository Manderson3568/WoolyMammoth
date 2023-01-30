import BlueButton from "../components/blueButton/BlueButton";
import SubHeading from "../components/subHeading/SubHeading";
import SymbolHeading from "../components/symbolHeading/SymbolHeading";
import "./InfoStyles.css";
const Info = (dark = false) => {
  return (
    <div className="info section">
      <div className="left">
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
      <div className={`right ${!dark ? "light" : "dark"}`}>
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

import BlueButton from "../blueButton/BlueButton";
import SubHeading from "../subHeading/SubHeading";
import SymbolHeading from "../symbolHeading/SymbolHeading";
import "./ConvincedStyles.css";

const Convinced = () => {
  return (
    <div className="section convinced">
      <SymbolHeading text="Hey, buddy" />
      <div className="convincedCont">
        <SubHeading text="Convinced? I want to work with you too!*" />
        <p>
          *If you pay market value salaries, dont ring me on too many weekends,
          and are buying the <span>first round.</span>
        </p>
        <BlueButton text="Hire him" />
      </div>
    </div>
  );
};
export default Convinced;
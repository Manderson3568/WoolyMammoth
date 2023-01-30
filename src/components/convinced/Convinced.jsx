import BlueButton from "../blueButton/BlueButton";
import SubHeading from "../subHeading/SubHeading";
import SymbolHeading from "../symbolHeading/SymbolHeading";
import "./ConvincedStyles.css";
import { GiSensuousness } from "react-icons/gi";

const Convinced = () => {
  return (
    <div className="section convinced">
      <SymbolHeading text="Hey, buddy" symbol={<GiSensuousness size={36} />} />
      <div className="convincedCont">
        <SubHeading text="Convinced? I want to work with you too!*" />
        <p>
          *If you pay market value salaries, dont ring me on too many weekends,
          and are buying the <span>first round.</span>
        </p>
        <BlueButton text="Interview me" link="mailto:manderson3568@gmail.com" />
      </div>
    </div>
  );
};
export default Convinced;

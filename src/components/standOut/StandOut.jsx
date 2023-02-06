import BlueButton from "../blueButton/BlueButton";
import StarWarsReference from "../starWarsReference/StarWarsReference";
import SubHeading from "../subHeading/SubHeading";
import "./StandOutStyles.css";
import michael from "../images/Michael.png";

const StandOut = ({ dark }) => {
  return (
    <div className="standOut section">
      <div className="left">
        <SubHeading text="I learn from every success, and even more from every failure." />
        <div className="underHeading">
          <StarWarsReference
            dark={dark}
            text="There can only be two, a senior and a junior, one to write the code, and one to peer review it"
          />
          <div className="container">
            <p>
              So how do I stands out? In a nutshell, it is by combining my
              interest in programming, passion for problem solving, and 9 years
              experience as a supervisor in the transport and logistics
              industry.
            </p>
            <p>
              I bring strong communication skills, experience handling both
              internal and external stakeholders, working in part of small teams
              and large corporations, I can work by myself, prioritise tasks,
              meet tight deadlines, and know when to ask for support.
            </p>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={`${michael}`} alt="" />

        <BlueButton text={"Lets work together"} />
      </div>
    </div>
  );
};
export default StandOut;

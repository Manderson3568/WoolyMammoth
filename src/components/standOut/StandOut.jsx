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
          <div className="container">
            <p>
              So how do I stand out? I'm a problem solver and passionate
              developer with over 9 years of experience in the transport and
              logistics industry. My interest in programming and commitment to
              lifelong learning helps me stay ahead of the curve, and I bring
              strong communication skills to the table, allowing me to work
              effectively with both internal and external stakeholders. Whether
              working in small teams or large corporations, I can adapt quickly,
              prioritize tasks, and meet tight deadlines. I know when to ask for
              support and am always seeking new challenges to help me grow as a
              developer.
            </p>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={`${michael}`} alt="" />

        <BlueButton
          text={"Lets work together"}
          link={"mailto:mandersion3568@gmail.com"}
        />
      </div>
    </div>
  );
};
export default StandOut;

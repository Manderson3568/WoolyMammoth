import IconCard from "../iconCard/IconCard";
import SubHeading from "../subHeading/SubHeading";
import "./AboutMeStyles.css";

const AboutMe = () => {
  return (
    <div className="aboutMe section">
      <SubHeading
        className="about"
        text="I am transitioning from a 9 year career in transport and logistics to be a front-end developer."
      />
      <div className="iconCards">
        <IconCard
          className="about"
          heading="History"
          text="Previously I have supervised teams varying from 3-18 people, worked as part of teams, as well as managed a site unsupervised, and been a customer facing manager. Problem solving was a key part of my every day roles, I often found myself developing excel macros to solve, or streamline work. "
        />
        <IconCard
          className="about"
          heading="The Change"
          text="After a new system rollout that I took part in I realised I enjoyed the technical side of problem solving and pursued this by completing the General Assembly software engineering immersive. I get great satisfaction from improving my tecxh skills, and having something tangible(ish) to show at the end."
        />
      </div>
    </div>
  );
};
export default AboutMe;

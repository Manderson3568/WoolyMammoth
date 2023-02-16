import IconCard from "../iconCard/IconCard";
import SubHeading from "../subHeading/SubHeading";
import "./AboutMeStyles.css";

const AboutMe = () => {
  return (
    <div className="aboutMe section">
      <SubHeading
        className="about"
        text="I am transitioning from a 9 year career in transport and logistics to be a full-stack developer."
      />
      <div className="iconCards">
        <IconCard
          className="about"
          heading="History"
          text="I've led teams of 3-18, worked collaboratively, managed sites independently, and served as a customer-facing manager. I excel at problem-solving, often creating Excel macros to streamline workflows and boost productivity."
        />
        <IconCard
          className="about"
          heading="The Change"
          text="Participating in a system rollout helped me discover my passion for technical problem-solving, prompting me to complete the General Assembly software engineering immersive. I find satisfaction in enhancing my tech skills and producing tangible outcomes."
        />
      </div>
    </div>
  );
};
export default AboutMe;

import "./MissionStyles.css";
import speaking from "../images/roro.webp";
import ArrowLink from "../arrowLink/ArrowLink";
import { useRef, useEffect, useState } from "react";

const Mission = ({ dark }) => {
  const [visible, setVisible] = useState(false);
  const missionBox = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    });
    observer.observe(missionBox.current);
  });
  return (
    <div className={`mission largeSection `}>
      <img src={`${speaking}`} alt="" />
      <div
        className={`missionStatement ${visible ? "active" : ""} ${
          dark ? "dark" : "light"
        }`}
        ref={missionBox}
      >
        <p className="statement">
          "As a team member, my primary goal is to bring value through building
          strong relationships, open communication, and an unwavering commitment
          to self-improvement. My passion for programming and problem-solving
          drives me to be a lifelong learner, constantly seeking new challenges
          and opportunities to grow. I believe that learning from my mistakes is
          crucial to success, and I pride myself on my excellent problem-solving
          skills. With these qualities, I am confident that I can make a
          positive impact on any team, and I am excited to continue pushing
          myself and those around me to achieve their full potential.""
        </p>
        <div className="missionFooter">
          <div className="nameCont">
            <p className="name">Michael Anderson</p>
          </div>
          <ArrowLink
            text="Come say hi"
            link="mailto:manderson3568@gmail.com"
            dark={!dark}
          />
        </div>
      </div>
    </div>
  );
};
export default Mission;

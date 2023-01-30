import "./MissionStyles.css";
import speaking from "../images/roro.jfif";
import ArrowLink from "../arrowLink/ArrowLink";
import { useRef, useEffect, useState } from "react";

const Mission = () => {
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
    <div className="mission largeSection">
      <img src={`${speaking}`} alt="" />
      <div
        className={`missionStatement ${visible ? "active" : ""}`}
        ref={missionBox}
      >
        <p className="statement">
          "My foucs is to bring value to any group I am a part of. Through
          building strong relationships, open communication, constant self
          improvement, learning from my mistakes, and excellent problem solving
          skills, I will make myself an invaluable member your herd.
        </p>
        <p className="statement">
          My passion for programming and problem solving was the catalyst for my
          career change, and a driving force behind my successes, and desire to
          learn more."
        </p>
        <div className="missionFooter">
          <div className="nameCont">
            <p className="name">Michael Anderson</p>
            <p className="title">Aspiring Mammoth</p>
          </div>
          <ArrowLink
            text="Come say hi"
            link="mailto:manderson3568@gmail.com"
            dark={true}
          />
        </div>
      </div>
    </div>
  );
};
export default Mission;

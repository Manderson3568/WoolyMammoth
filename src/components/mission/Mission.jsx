import "./MissionStyles.css";
import speaking from "../images/roro.jfif";

const Mission = () => {
  return (
    <div className="mission">
      <img src={`${speaking}`} alt="" />
      <div className="missionStatement">
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
          <a href="#">Meet the herd {`>`}</a>
        </div>
      </div>
    </div>
  );
};
export default Mission;

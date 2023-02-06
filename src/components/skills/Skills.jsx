import Card from "../card/Card";
import SymbolHeading from "../symbolHeading/SymbolHeading";
import "./skillsStyles.css";
import { useRef } from "react";
import { GiStrong } from "react-icons/gi";

const Skills = ({ dark }) => {
  const cards = useRef();

  return (
    <div className="skills section">
      <SymbolHeading text="What I Do" symbol={<GiStrong size={"36"} />} />
      <div className="cards">
        <Card
          dark={dark}
          ref={cards}
          className={"first"}
          heading="React.JS"
          link="#"
          text="React is the front end I have the best understanding of, including react-router-dom and react-testing-library. I have also built one project in Vue.js."
        />
        <Card
          dark={dark}
          ref={cards}
          className={"second"}
          heading="Collaboration"
          link="#"
          text="I worked in groups of 2 and 3 developers for my last two projects. There was also a 2 day collaboration with General Assembly's UX/UI class to design a small landing page."
        />
        <Card
          dark={dark}
          ref={cards}
          className="last"
          heading="APIs/Back-end"
          link="#"
          text="I used Ruby on Rails and Node.JS using the Express library. I am familiar with the MVC framework. I built a RESTful API, as well as utilized relational and GraphQL based API's in several projects and pieces of class work. I am very familiar with accessing them through Axios."
        />
        <Card
          dark={dark}
          ref={cards}
          className={"first"}
          heading="Javascript"
          link="#"
          text="Daily code challenges through the course, code wars challenges, and trying out Rosetta stone tasks have given me a good understanding of vanilla javascript, plus Underscore and Jquery libraries."
        />
        <Card
          dark={dark}
          ref={cards}
          className={"second"}
          heading="Dev-Ops"
          link="#"
          text="I have used github through terminal2 on mac or PowerShell on PC, I am familiar with pull requests, branching, and conflict resolution through VS code"
        />
        <Card
          dark={dark}
          ref={cards}
          className="last"
          heading="Debugging & problem solving"
          link="#"
          text="7 years of supervising has given me a very logical approach to breaking down problems and finding solutions. This helps me in both designing solutions and debugging them."
        />
      </div>
    </div>
  );
};
export default Skills;

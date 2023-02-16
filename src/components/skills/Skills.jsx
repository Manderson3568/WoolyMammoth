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
          heading="Front-end Frameworks"
          link="#"
          text="As a front-end developer, my primary goal is to create dynamic, user-friendly web applications that engage and delight users. With my deep understanding of React and Vue.js, I am confident in my ability to deliver on this goal. Whether you need a complex, multi-page application or a simple, streamlined user interface, I have the skills and expertise to bring your vision to life."
        />
        <Card
          dark={dark}
          ref={cards}
          className={"second"}
          heading="Collaboration"
          link="#"
          text="Throughout my last two projects, I had the opportunity to work closely with a team of 2-3 talented developers. This collaborative approach enabled us to pool our skills and experience to deliver high-quality, user-friendly applications. In addition, I had the chance to collaborate with General Assembly's UX/UI class for a 2-day design project, where we worked together to create a visually stunning landing page. Working with a team is a passion of mine, and I take great pride in my ability to collaborate effectively to achieve shared goals."
        />
        <Card
          dark={dark}
          ref={cards}
          className="last"
          heading="APIs/Back-end"
          link="#"
          text="My experience working with Ruby on Rails and Node.js using the Express library has enabled me to build robust, feature-rich web applications that meet the unique needs of my clients. As a developer, I am always striving to optimize performance and efficiency, and my understanding of the MVC framework has been instrumental in achieving this goal. In addition, my experience working with RESTful and GraphQL-based APIs has helped me build applications that are both flexible and scalable, ensuring that they can adapt to changing needs over time."
        />
        <Card
          dark={dark}
          ref={cards}
          className={"first"}
          heading="Javascript"
          link="#"
          text="As a dedicated developer, I am committed to expanding my knowledge and skills. Through daily code challenges, Code Wars challenges, and Rosetta Stone tasks, I have gained a deep understanding of vanilla JavaScript, as well as popular libraries like Underscore and jQuery. My passion for staying up-to-date with the latest industry trends and techniques has been instrumental in my success as a developer."
        />
        <Card
          dark={dark}
          ref={cards}
          className={"second"}
          heading="Git"
          link="#"
          text="As a developer, I understand the importance of collaboration and teamwork. My experience working with GitHub through Terminal on my Mac and PowerShell on my PC has enabled me to effectively collaborate with other developers, whether it's through pull requests, branching, or conflict resolution. Additionally, I am highly skilled in using Visual Studio Code to streamline my workflow and manage GitHub repositories, ensuring that I am always able to work effectively and efficiently as part of a team."
        />
        <Card
          dark={dark}
          ref={cards}
          className="last"
          heading="Debugging & problem solving"
          link="#"
          text="As a supervisor, I learned to approach problems with a critical eye and develop logical, effective solutions. This approach has served me well as a developer, allowing me to tackle even the most complex problems with ease. Whether designing solutions or debugging code, I rely on this same logical approach to identify issues and develop solutions that meet the unique needs of my clients. My ability to think critically and problem-solve has been instrumental in my success as a developer."
        />
      </div>
    </div>
  );
};
export default Skills;

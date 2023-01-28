import Slider from "../slider/Slider";
import SubHeading from "../subHeading/SubHeading";
import SymbolHeading from "../symbolHeading/SymbolHeading";
import { projectSlides } from "../slideObjects";
import { useState } from "react";
import "./ProjectsStyles.css";

const Projects = (dark = false) => {
  const [current, setCurrent] = useState(0);
  const length = projectSlides.length - 1;
  const prevSlide = () => {
    setCurrent(current === 0 ? length : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === length ? 0 : current + 1);
  };
  return (
    <div className="projects section">
      <SymbolHeading text={"Home Runs"} />
      <div className="controlContainer">
        <SubHeading text={"Every game is a chance to learn"} />
        <div className="controls">
          <span
            onClick={() => {
              prevSlide();
            }}
          >
            {"<"}
          </span>
          <span>
            <ul className="slideCounter">
              {projectSlides.map((slides, i) => {
                return (
                  <li
                    className={`${i === current ? "active" : ""} ${
                      !dark ? "dark" : "light"
                    }`}
                  >
                    {i + 1}
                  </li>
                );
              })}
            </ul>
          </span>
          <span
            onClick={() => {
              nextSlide();
            }}
          >
            {">"}
          </span>
        </div>
      </div>

      <Slider slides={projectSlides} current={current} />
    </div>
  );
};
export default Projects;

import Slider from "../slider/Slider";
import SubHeading from "../subHeading/SubHeading";
import SymbolHeading from "../symbolHeading/SymbolHeading";
import { projectSlides } from "../slideObjects";
import { useState } from "react";
import "./ProjectsStyles.css";
import { GiBaseballBat } from "react-icons/gi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Projects = (dark = false) => {
  const [current, setCurrent] = useState(0);
  const length = projectSlides.length;
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  return (
    <div className="projects section">
      <SymbolHeading text={"Home Runs"} symbol={<GiBaseballBat size={36} />} />
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

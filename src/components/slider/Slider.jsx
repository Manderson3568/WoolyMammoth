import Slide from "../slide/Slide";
import "./SliderStyles.css";
import { useState } from "react";

const Slider = ({ slides, current, dark }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="slider"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {slides.map((slide, i) => {
        return (
          <Slide
            key={`slide-${i}`}
            dark={dark}
            hover={hover}
            slide={slide}
            className={`${i === current ? "active" : ""}`}
            style={{ left: `${current * -1160}px` }}
          />
        );
      })}
    </div>
  );
};
export default Slider;

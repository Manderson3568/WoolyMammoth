import "./ImageCarouselStyles.css";
import { useState } from "react";
const ImageCarousel = ({ slides }) => {
  const [forwardTimer, setForwardTimer] = useState(null);
  const [backwardTimer, setBackwardTimer] = useState(null);
  const [position, setPosition] = useState(0);
  const startForward = () => {
    let counter = position;
    const timer = setInterval(() => {
      if (counter < slides.length - 2) {
        counter++;
        setPosition(counter);
      } else {
        clearInterval(timer);
      }
    }, 1000);
    setForwardTimer(timer);
  };
  const stopForward = () => {
    clearInterval(forwardTimer);
  };
  const startBackward = () => {
    let counter = position;
    const timer = setInterval(() => {
      if (counter >= 0) {
        console.log(counter);
        console.log("position", position);
        counter--;
        setPosition(counter);
      } else {
        clearInterval(timer);
      }
    }, 1000);
    setBackwardTimer(timer);
  };
  const stopBackward = () => {
    clearInterval(backwardTimer);
  };
  return (
    <div className="carousel">
      <div className="buttonsCont">
        <div
          className="buttons leftButton"
          onMouseEnter={startBackward}
          onMouseLeave={stopBackward}
        ></div>
        <div
          className="buttons rightButton"
          onMouseEnter={startForward}
          onMouseLeave={stopForward}
        ></div>
      </div>
      {slides.map((slide) => {
        return (
          <img
            style={{ left: `${position * -370}px` }}
            src={`${slide.img}`}
            alt={`${slide.alt}`}
          />
        );
      })}
    </div>
  );
};
export default ImageCarousel;

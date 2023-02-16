import { forwardRef, useEffect, useState } from "react";
import SubHeading from "../subHeading/SubHeading";
import "./HobbyStyles.css";

const Hobby = forwardRef(({ heading, text, image }, ref) => {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const handleHover = () => {
    setHover(!hover);
  };
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    });
    if (ref) {
      observer.observe(ref.current);
    }
  }, []);

  return (
    <div
      className={`${visible ? "visible" : ""} ${active ? "active" : ""} ${
        hover ? "hover" : ""
      } hobby`}
      style={{ backgroundImage: `url(${image})` }}
      ref={ref}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={handleClick}
    >
      <SubHeading text={heading} />
      <p>{text}</p>
    </div>
  );
});

export default Hobby;

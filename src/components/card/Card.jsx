import "./CardStyles.css";
import { useState, forwardRef, useEffect } from "react";
import ArrowLink from "../arrowLink/ArrowLink";

const Card = forwardRef(
  ({ heading, text, link, className, dark = false }, ref) => {
    const [visible, setVisible] = useState(false);
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
    const [classes, setClasses] = useState(className);
    return (
      <div
        ref={ref}
        className={`${classes ? classes : ""} ${visible ? "visible" : ""} card`}
      >
        <h3>{heading}</h3>
        <p>{text}</p>
        {/* <a href={link} className={dark ? "white" : "black"}>
          All SKills <span className={dark ? "dark" : "light"}>{`>`}</span>
        </a> */}
        <ArrowLink text="All Skills" link="#" dark={dark} />
      </div>
    );
  }
);
export default Card;

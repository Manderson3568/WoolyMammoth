import { forwardRef, useState, useEffect } from "react";
import "./BlueButtonStyles.css";
const BlueButton = forwardRef(({ text, link }, ref) => {
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
  const arrow = ">";
  return (
    <a
      href={`${link || "#"}`}
      className={`blueButton ${visible ? "visible" : ""}`}
      ref={ref}
    >
      <span className="buttonLeft">{text}</span>
      <span className="buttonRight">{arrow}</span>
    </a>
  );
});
export default BlueButton;

import BlueButton from "../blueButton/BlueButton";
import { useRef } from "react";
import "./IntroImageStyles.css";
const IntroImage = ({ buttonText, image, imageAlt }) => {
  const button = useRef();
  return (
    <div className="introImage largeSection">
      <BlueButton
        text={buttonText}
        link="https://michael-anderson-portfolio.firebaseapp.com/"
        ref={button}
      />
      <img src={image} alt={imageAlt} />
    </div>
  );
};
export default IntroImage;

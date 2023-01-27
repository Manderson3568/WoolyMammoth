import BlueButton from "../blueButton/BlueButton";
import "./IntroImageStyles.css";
const IntroImage = ({ buttonText, image, imageAlt }) => {
  return (
    <div className="introImage">
      <BlueButton text={buttonText} />
      <img src={image} alt={imageAlt} />
    </div>
  );
};
export default IntroImage;

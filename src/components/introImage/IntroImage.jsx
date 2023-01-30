import BlueButton from "../blueButton/BlueButton";
import "./IntroImageStyles.css";
const IntroImage = ({ buttonText, image, imageAlt }) => {
  return (
    <div className="introImage largeSection">
      <BlueButton
        text={buttonText}
        link="https://michael-anderson-portfolio.firebaseapp.com/"
      />
      <img src={image} alt={imageAlt} />
    </div>
  );
};
export default IntroImage;

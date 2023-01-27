import "./BlueButtonStyles.css";
const BlueButton = ({ text }) => {
  const arrow = ">";
  return (
    <a href={"#"} className="blueButton">
      <span className="buttonLeft">{text}</span>
      <span className="buttonRight">{arrow}</span>
    </a>
  );
};
export default BlueButton;

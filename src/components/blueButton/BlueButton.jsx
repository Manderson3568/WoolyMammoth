import "./BlueButtonStyles.css";
const BlueButton = ({ text, link }) => {
  const arrow = ">";
  return (
    <a href={`${link || "#"}`} className="blueButton">
      <span className="buttonLeft">{text}</span>
      <span className="buttonRight">{arrow}</span>
    </a>
  );
};
export default BlueButton;

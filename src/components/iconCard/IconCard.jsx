import SymbolHeading from "../symbolHeading/SymbolHeading";

const IconCard = ({ heading, text, icon, className }) => {
  return (
    <div className={`card ${className}`}>
      <SymbolHeading text={heading} symbol={icon} />
      <p>{text}</p>
    </div>
  );
};
export default IconCard;

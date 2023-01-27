import "./SymbolHeadingStyles.css";
const SymbolHeading = ({ text, symbol }) => {
  return (
    <div className="symbolHeading">
      {symbol}
      <h4>{text}</h4>
    </div>
  );
};
export default SymbolHeading;

import "./StarWarsReferenceStyles.css";

const StarWarsReference = ({ text, dark }) => {
  return <p className={`starWars ${dark ? "dark" : "light"}`}>{text}</p>;
};
export default StarWarsReference;

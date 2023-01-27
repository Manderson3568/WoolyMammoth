import "./CardStyles.css";

const Card = ({ heading, text, link, className, dark = false }) => {
  return (
    <div className={`${className ? className : ""} card`}>
      <h3>{heading}</h3>
      <p>{text}</p>
      <a href={link} className={dark ? "white" : "black"}>
        All SKills <span className={dark ? "dark" : "light"}>{`>`}</span>
      </a>
    </div>
  );
};
export default Card;

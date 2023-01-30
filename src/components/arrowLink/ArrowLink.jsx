import "./ArrowLinkStyles.css";

const ArrowLink = ({ text, link, dark = false }) => {
  return (
    <a href={link} className={dark ? " arrowLink white" : "arrowLink black"}>
      {text}
      <span className={dark ? "dark" : "light"}>{`>`}</span>
    </a>
  );
};
export default ArrowLink;

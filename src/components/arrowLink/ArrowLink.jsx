import "./ArrowLinkStyles.css";

const ArrowLink = ({ text, link, dark = false }) => {
  return (
    <a href={link} className={dark ? " arrowLink white" : "arrowLink black"}>
      <span className="linkLeft">{text}</span>
      <span className={dark ? "dark linkRight" : "light linkRight"}>{`>`}</span>
    </a>
  );
};
export default ArrowLink;

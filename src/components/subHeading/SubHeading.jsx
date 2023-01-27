import "./subHeadingStyles.css";
const SubHeading = ({ text, className }) => {
  return <h2 className={`subHeading ${className}`}>{text}</h2>;
};
export default SubHeading;

import SubHeading from "../subHeading/SubHeading";
import SymbolHeading from "../symbolHeading/SymbolHeading";
import "./SlideStyles.css";

const Slide = ({ slide, className, style, hover }) => {
  return (
    <div className={`slide ${className}`} style={style}>
      <div className="left">
        <SymbolHeading text={slide.tagline} />
        <SubHeading text={slide.heading} />
        {slide.paragraphs.map((paragraph) => {
          return <p>{paragraph}</p>;
        })}
        <h4>Technologies Used:</h4>
        <p>{slide.tech}</p>
        <a href={slide.link}>Visit Site</a>
      </div>
      <div className="right">
        <img src={slide.image} className={`${hover ? "shift" : ""}`} />
      </div>
    </div>
  );
};
export default Slide;

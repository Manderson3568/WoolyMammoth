import ArrowLink from "../arrowLink/ArrowLink";
import SubHeading from "../subHeading/SubHeading";
import SymbolHeading from "../symbolHeading/SymbolHeading";
import "./SlideStyles.css";

const Slide = ({ dark, slide, className, style, hover }) => {
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
        <ArrowLink text={"visit site"} link={slide.link} dark={dark} />
      </div>
      <div className="right">
        <img src={slide.image} className={`${hover ? "shift" : ""}`} alt="" />
      </div>
    </div>
  );
};
export default Slide;

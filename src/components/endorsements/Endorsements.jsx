import Endorsement from "../endorsement/Endorsement";
import { endorsementText } from "../slideObjects";
import SubHeading from "../subHeading/SubHeading";
import SymbolHeading from "../symbolHeading/SymbolHeading";
import "./EndorsementsStyles.css";
import { GiRelationshipBounds } from "react-icons/gi";

const Endorsements = () => {
  return (
    <div className="endorsements section">
      <div className="endHeader">
        <SymbolHeading
          text="My collegues <3 me"
          symbol={<GiRelationshipBounds size={36} />}
        />
        <SubHeading text="After two years working with me, they still had nice things to say. " />
      </div>
      <div className="endCont">
        {endorsementText.map((endorsement, i) => {
          return <Endorsement endorsement={endorsement} />;
        })}
      </div>
    </div>
  );
};
export default Endorsements;

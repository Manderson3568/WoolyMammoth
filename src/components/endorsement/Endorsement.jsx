import "./EndorsementStyles.css";

const Endorsement = ({ endorsement }) => {
  return (
    <div className="endorsement">
      <p>{endorsement.text}</p>
      <div className="endorsementFooter">
        <div className="image">
          <img src={`${endorsement.img}`} alt={endorsement.name} />
        </div>
        <div className="nameCont">
          <p className="name">{endorsement.name}</p>
          <p className="title">{endorsement.title}</p>
        </div>
      </div>
    </div>
  );
};
export default Endorsement;

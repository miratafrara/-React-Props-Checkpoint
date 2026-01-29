import Joueur from "./Joueur";
import joueurs from "./joueurs";

const JoueursList = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "20px"
      }}
    >
      {joueurs.map((joueur, index) => (
        <Joueur key={index} {...joueur} />
      ))}
    </div>
  );
};

export default JoueursList;

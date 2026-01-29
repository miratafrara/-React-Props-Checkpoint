import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const Joueur = ({
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  image
}) => {

  const cardStyle = {
    width: "19rem",
    margin: "15px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    overflow: "hidden"
  };

  const imageStyle = {
    height: "260px",
    objectFit: "cover"
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={image} style={imageStyle} />

      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title style={{ fontWeight: "bold" }}>
          {name}
        </Card.Title>

        <Badge bg="dark" style={{ marginBottom: "10px" }}>
          #{jerseyNumber}
        </Badge>

        <Card.Text>
          <strong>Équipe :</strong> {team}<br />
          <strong>Nationalité :</strong> {nationality}<br />
          <strong>Âge :</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

/* Valeurs par défaut */
Joueur.defaultProps = {
  name: "Joueur inconnu",
  team: "Équipe inconnue",
  nationality: "Inconnue",
  jerseyNumber: 0,
  age: 0,
  image: "https://via.placeholder.com/300"
};

export default Joueur;

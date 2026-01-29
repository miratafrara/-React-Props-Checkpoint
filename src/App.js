import JoueursList from "./JoueursList";

function App() {
  return (
    <div style={{ backgroundColor: "#f2f4f7", minHeight: "100vh" }}>
      <h1
        style={{
          textAlign: "center",
          padding: "30px",
          fontWeight: "bold"
        }}
      >
        ⚽ Cartes FIFA – Joueurs
      </h1>

      <JoueursList />
    </div>
  );
}

export default App;

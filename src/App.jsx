import "./App.css";
import parties from "./data/parties.json";

function App() {
  /* Rakenna tähän toiminnallisuus. Voit pilkkoa komponentit erillisiin tiedostoihin. */
  return (
    <div className="app">
      <h1 className="header">Rakenna oma hallitus</h1>
      <p className="subhead">
        Kokoa hallitus täppäämällä puoluetta. Voit poistaa valinnan täppäämällä
        jo valittua puoluetta uudestaan.
      </p>
      <div className="buttons">
        {parties.map((party) => {
          return (
            <button
              key={`button-${party.name}`}
              type="button"
              style={{
                backgroundColor: party.color,
                color: party.blackText ? "black" : "white",
              }}
            >
              {party.name} ({party.seats})
            </button>
          );
        })}
      </div>
      <div className="description">
        Vähemmistöhallitus: XX edustajaa
        {/* Tämän tulee muuttua dynaamisesti valintojen mukaan. */}
      </div>
      <div className="bar">
        {/* Tähän pylväs, joka täyttyy valittujen puolueiden mukaan. Täysi leveys edustaa 200 paikkaa. */}
      </div>
      <div className="description">
        Olet koonnut vähemmistöhallituksen, jossa on mukana <strong>XX</strong>,{" "}
        <strong>YY</strong> ja <strong>ZZ</strong>.
        {/* Tähän tekstikuvaus valituista puolueista */}
      </div>
    </div>
  );
}

export default App;

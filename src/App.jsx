import "./App.css";
import parties from "./data/parties.json";
import React, { useState } from "react";
import { Buttons, Reset } from "./components/buttons";
import { Bar } from "./components/bar";
import { Members, Parties } from "./components/descriptions";

function App() {
  /* Rakenna tähän toiminnallisuus. Voit pilkkoa komponentit erillisiin tiedostoihin. */
  const [chosenParties, setChosenParties] = useState([]);
  const [memberAmount, setMemberAmount] = useState(0);

  const updateChosenParties = (val) => {
    let tempList = chosenParties;
    if (tempList.some((item) => item === val)) {
      tempList = tempList.filter((item) => item !== val);
    } else {
      tempList = [...tempList, val];
    }
    let count = 0;
    tempList.forEach((party) => {
      count += party.seats;
    });
    setChosenParties(tempList);
    setMemberAmount(count);
  };

  const resetAll = () => {
    setChosenParties([]);
    setMemberAmount(0);
  };

  return (
    <div className="app">
      <h1 className="header">Rakenna oma hallitus</h1>
      <p className="subhead">
        Kokoa hallitus täppäämällä puoluetta. Voit poistaa valinnan täppäämällä
        jo valittua puoluetta uudestaan.
      </p>
      <Buttons
        updateChosenParties={updateChosenParties}
        parties={parties}
        chosenParties={chosenParties}
      />
      <Reset resetAll={resetAll} />
      <Members memberAmount={memberAmount} />
      <Bar chosenParties={chosenParties} parties={parties} />
      <Parties chosenParties={chosenParties} memberAmount={memberAmount} />
    </div>
  );
}

export default App;

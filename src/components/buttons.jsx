import React from "react";

export const Buttons = (props) => {
  return (
    <div className="buttons">
      {props.parties.map((party) => {
        const isChosen = props.chosenParties?.some((item) => item === party);
        return (
          <button
            key={`button-${party.name}`}
            type="button"
            style={{
              backgroundColor: party.color,
              color: party.blackText ? "black" : "white",
              opacity: isChosen ? "1" : "0.6",
            }}
            onClick={() => props.updateChosenParties(party)}
          >
            {party.name} ({party.seats})
          </button>
        );
      })}
    </div>
  );
};

export const Reset = (props) => {
  return (
    <div className="reset">
      <div
        className="resetButton"
        type="button"
        onClick={() => props.resetAll()}
      >
        Aloita alusta
      </div>
    </div>
  );
};

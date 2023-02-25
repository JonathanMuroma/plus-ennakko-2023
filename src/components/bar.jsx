import React from "react";

export const Bar = (props) => {
  return (
    <div className="bar">
      {/* Tähän pylväs, joka täyttyy valittujen puolueiden mukaan. Täysi leveys edustaa 200 paikkaa. */}
      {props.parties.map((party, idx) => {
        const isChosen = props.chosenParties.some((item) => item === party);
        return (
          <div
            key={idx}
            className="partyBar"
            style={{
              flex: isChosen ? `0 1 ${(party.seats / 200) * 100}%` : "0 1 0%",
              background: party.color,
            }}
          ></div>
        );
      })}
      <div className="middle">
        <div className="line"></div>
        <div className="description lineDesc">100 edustajaa</div>
      </div>
    </div>
  );
};

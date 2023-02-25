import React from "react";

export const Members = (props) => {
  return (
    <div className="description">
      {/* Tämän tulee muuttua dynaamisesti valintojen mukaan. */}
      {props.memberAmount > 100
        ? "Enemmistöhallitus"
        : "Vähemmistöhallitus"}: {props.memberAmount} edustajaa
    </div>
  );
};

export const Parties = (props) => {
  return (
    <div className="description">
      Olet koonnut{" "}
      {props.memberAmount > 100
        ? "Enemmistöhallituksen"
        : "Vähemmistöhallituksen"}
      , jossa on mukana
      {props.chosenParties.map((party, idx) => {
        let space = ", ";
        if (idx === props.chosenParties.length - 1) {
          space = " ja ";
        } else if (idx === 0) {
          space = " ";
        }
        return <strong key={idx}>{space + party.longName}</strong>;
      })}
      .{/* Tähän voi tulla tekstikuvaus valituista puolueista */}
    </div>
  );
};

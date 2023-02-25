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
  let count = 0;
  return (
    <div className="description">
      {/* Tähän voi tulla tekstikuvaus valituista puolueista */}
      {props.memberAmount > 0 ? (
        <>
          Olet koonnut{" "}
          {props.memberAmount > 100
            ? "Enemmistöhallituksen"
            : "Vähemmistöhallituksen"}
          , jossa on mukana
          {props.parties.map((party, idx) => {
            let space = ", ";
            if (count === 0) {
              space = " ";
            } else if (count === props.chosenParties.length - 1) {
              space = " ja ";
            }
            if (props.chosenParties.some((item) => item === party)) {
              count++;
              return <strong key={idx}>{space + party.longName}</strong>;
            }
          })}
        </>
      ) : (
        "Hallituksessa ei ole edustajia"
      )}
      .
    </div>
  );
};

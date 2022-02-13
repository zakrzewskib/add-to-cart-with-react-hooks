import React from "react";

import Offer from "./Offer";

import classes from "./Offers.module.css";

const Offers = () => {
  const data = require("../../data/offers.json");
  const offers = data["offers"];

  const offerList = offers.map(offer => {
    return <Offer offer={offer} key={offer.id} />;
  });

  return (
    <div className={classes["offers"]}>
      <h2>Oferty promowane</h2>
      <ol className={classes["offers-list"]}>{offerList}</ol>
    </div>
  );
};

export default Offers;

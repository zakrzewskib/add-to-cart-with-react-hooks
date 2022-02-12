import React from "react";

import Offer from "./Offer";

import classes from "./Offers.module.css";

const Offers = () => {
  const offers = [
    {
      id: "1",
      name: "Niebieski Smartfon MOTOROLA Moto E7 Power 4/64GB",
      img: "https://a.allegroimg.com/s180/11287d/e4c818ae4965b6101adc6b31bf8d/Niebieski-Smartfon-MOTOROLA-Moto-E7-Power-4-64GB",
      price: 499.0,
    },
    {
      id: "2",
      name: "Samsung A50 4G LTE 128GB/4GB GWARANCJA Sklep",
      img: "https://a.allegroimg.com/s180/111027/64d6f9604e659010ed665c6fc167/Samsung-A50-4G-LTE-128GB-4GB-GWARANCJA-Sklep",
      price: 679.99,
    },
  ];

  const offerList = offers.map(offer => {
    return <Offer offer={offer} key={offer.id} />;
  });

  return (
    <div className={classes["offers"]}>
      <h2>Oferty promowane</h2>
      <ul className={classes["offers-list"]}>{offerList}</ul>
    </div>
  );
};

export default Offers;

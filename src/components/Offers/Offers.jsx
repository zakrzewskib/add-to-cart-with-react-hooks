import React from "react";

import Offer from "./Offer";

import classes from "./Offers.module.css";

const Offers = () => {
  const offers = [
    {
      id: "1",
      name: "Smartfon Apple iPhone 11 4 GB / 128 GB czarny",
      img: "https://a.allegroimg.com/s180/11c1dd/d1e29d53460ebd265fef8a536ed8/APPLE-IPHONE-11-128GB-WYBOR-KOLOROW-KL-A",
      price: 679.99,
    },
    {
      id: "2",
      name: "Smartfon Apple iPhone 11 4 GB / 128 GB czarny",
      img: "https://a.allegroimg.com/s180/11c1dd/d1e29d53460ebd265fef8a536ed8/APPLE-IPHONE-11-128GB-WYBOR-KOLOROW-KL-A",
      price: 248.0,
    },
  ];

  const offerList = offers.map(offer => {
    return <Offer offer={offer} key={offer.id} />;
  });

  return <ul>{offerList}</ul>;
};

export default Offers;

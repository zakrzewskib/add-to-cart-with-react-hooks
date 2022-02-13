import React from "react";

import classes from "./OfferModalContent.module.css";

const OfferModalContent = props => {
  return (
    <div className={classes["offer-modal-content"]}>
      <button className="primary-button" onClick={props.addToCart}>
        Dodaj do koszyka
      </button>
    </div>
  );
};

export default OfferModalContent;

import React, { useState } from "react";
import Modal from "../UI/Modal";

import classes from "./Offer.module.css";

const Offer = props => {
  const offer = props.offer;
  const integerPart = Math.trunc(offer.price);
  const decimal = (offer.price - Math.floor(offer.price)) * 100;
  const decimalToInt = String("0" + Math.trunc(decimal)).slice(-2);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <li
      className={classes["offer"]}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div
        className={classes["img-container"]}
        style={{
          backgroundImage: `url(${offer.img})`,
        }}
      ></div>
      <div className={classes["offer-description"]}>
        <h2 className={classes["name"]}>{offer.name}</h2>
        <h2 className={classes["price"]}>
          <div>
            <span>{integerPart}</span>
            <span>,</span>
            <span className={classes["decimal"]}>{decimalToInt} zł</span>
          </div>
        </h2>
      </div>
      {isHovering && <Modal />}
    </li>
  );
};

export default Offer;

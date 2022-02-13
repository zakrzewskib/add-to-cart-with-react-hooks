import React, { useState, useContext } from "react";
import CartContext from "../store/cart-context";
import Modal from "../UI/Modal";

import classes from "./Offer.module.css";
import OfferModalContent from "./OfferModalContent";

const Offer = props => {
  const offer = props.offer;
  const price = parseFloat(
    offer.price.replace(/\s/g, "").replace(/,/, ".")
  );
  const integerPart = Math.trunc(price);
  const decimal = (price - Math.floor(price)) * 100;
  const decimalToInt = String("0" + Math.trunc(decimal)).slice(-2);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const cartCtx = useContext(CartContext);

  const addToCart = () => {
    cartCtx.addItem({ ...offer, price: price });
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
      <Modal isHovering={isHovering} myClass="offer-modal">
        <OfferModalContent addToCart={addToCart} />
      </Modal>
    </li>
  );
};

export default Offer;

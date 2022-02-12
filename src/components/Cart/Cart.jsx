import React, { useState } from "react";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";

const Cart = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <li
      className={classes["cart"]}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img
        src="https://assets.allegrostatic.com/metrum/icon/bag-c9f42da6df.svg"
        alt=""
      />
      <Modal isHovering={isHovering} myClass="cart-modal">
        test
      </Modal>
    </li>
  );
};

export default Cart;

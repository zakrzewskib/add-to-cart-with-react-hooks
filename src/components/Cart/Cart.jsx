import React, { useState, useContext, useEffect } from "react";
import CartContext from "../store/cart-context";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
import CartContent from "./CartContent";
import CartItem from "./CartItem";

const Cart = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const cartCtx = useContext(CartContext);

  const offers = cartCtx.items;
  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const numberOfCartItems = offers.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };

  const cartItems = offers.map(item => {
    return (
      <CartItem
        key={item.id}
        item={item}
        onRemove={cartItemRemoveHandler}
      />
    );
  });

  const [justAddedToCart, setJustAddedToCart] = useState(false);

  const btnClasses = `${classes["cart"]} ${
    justAddedToCart ? classes["bump"] : ""
  }`;

  useEffect(() => {
    if (offers.length === 0) {
      return;
    }
    setJustAddedToCart(true);

    const timer = setTimeout(() => {
      setJustAddedToCart(false);
    }, 300); // animation: bump 300ms ease-out;

    return () => {
      clearTimeout(timer);
    };
  }, [offers]);

  return (
    <li
      className={btnClasses}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img
        src="https://assets.allegrostatic.com/metrum/icon/bag-c9f42da6df.svg"
        alt=""
      />

      <div className={classes["number-of-items"]}>{numberOfCartItems}</div>

      <Modal isHovering={isHovering} myClass="cart-modal">
        <CartContent cartItems={cartItems} totalAmount={totalAmount} />
      </Modal>
    </li>
  );
};

export default Cart;

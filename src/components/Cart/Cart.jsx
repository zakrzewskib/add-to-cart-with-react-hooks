import React, { useState, useContext } from "react";
import CartContext from "../store/cart-context";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
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

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };

  const numberOfCartItems = offers.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const cartItems = offers.map(item => {
    return (
      <CartItem
        key={item.id}
        item={item}
        onRemove={cartItemRemoveHandler}
      />
    );
  });

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

      <div className={classes["number-of-items"]}>{numberOfCartItems}</div>

      <Modal isHovering={isHovering} myClass="cart-modal">
        <div className={classes["cart-container"]}>
          <div className={classes["your-cart"]}>
            <h2>Twój koszyk</h2>
            <div className={classes["amount"]}>
              <p className={classes["cart-value"]}> WARTOŚĆ KOSZYKA </p>
              <h2>{totalAmount} zł</h2>
            </div>
          </div>
          {cartItems.length === 0 ? (
            <p className={classes["empty"]}>Twój koszyk jest pusty</p>
          ) : (
            <ul className={classes["cart-items-list"]}>{cartItems}</ul>
          )}
        </div>
      </Modal>
    </li>
  );
};

export default Cart;

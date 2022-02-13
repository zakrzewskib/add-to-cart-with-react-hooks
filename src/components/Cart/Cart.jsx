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
  const totalAmount = cartCtx.totalAmount;

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

      <Modal isHovering={true} myClass="cart-modal">
        {/* <p>totalAmount = {totalAmount}</p> */}
        {cartItems.length === 0 ? (
          <p>Twój koszyk jest pusty</p>
        ) : (
          <ul className={classes["cart-items-list"]}>{cartItems}</ul>
        )}
      </Modal>
    </li>
  );
};

export default Cart;

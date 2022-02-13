import React from "react";

import classes from "./CartItem.module.css";

const CartItem = props => {
  const item = props.item;
  return (
    <div className={classes["cart-item"]}>
      <p> {item.name}</p>
      <p>{item.price}</p>
      <p>{item.amount}</p>
      <button>x</button>
    </div>
  );
};

export default CartItem;

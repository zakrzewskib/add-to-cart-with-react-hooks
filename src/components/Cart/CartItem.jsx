import React from "react";

import classes from "./CartItem.module.css";

const CartItem = props => {
  const item = props.item;
  const price = item.price.toFixed(2);
  const name =
    item.name.length > 15 ? item.name.substring(0, 15) + "..." : item.name;

  return (
    <div className={classes["cart-item"]}>
      <p>{name}</p>
      <p>{price} zł</p>
      <p>{item.amount}</p>
      <button onClick={() => props.onRemove(item.id)}>x</button>
    </div>
  );
};

export default CartItem;

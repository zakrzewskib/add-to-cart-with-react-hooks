import React from "react";

const CartItem = props => {
  const item = props.item;
  return (
    <div>
      <p> {item.name}</p>
      <p>{item.price}</p>
      <p>{item.amount}</p>
    </div>
  );
};

export default CartItem;

import React from "react";

import classes from "./CartContent.module.css";

const CartContent = props => {
  return (
    <div className={classes["cart-container"]}>
      <div className={classes["your-cart"]}>
        <h2>Twój koszyk</h2>
        <div className={classes["amount"]}>
          <p className={classes["cart-value"]}> WARTOŚĆ KOSZYKA </p>
          <h2
            className={`${
              props.totalAmount > 10000 ? classes["smaller"] : ""
            }`}
          >
            {props.totalAmount} zł
          </h2>
        </div>
      </div>
      {props.cartItems.length === 0 ? (
        <p className={classes["empty"]}>Twój koszyk jest pusty</p>
      ) : (
        <ul className={classes["cart-items-list"]}>{props.cartItems}</ul>
      )}
    </div>
  );
};

export default CartContent;

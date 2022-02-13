import React, { useState } from "react";
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

  const offers = [
    {
      id: "1c",
      name: "Niebieski Smartfon MOTOROLA Moto E7 Power 4/64GB",
      img: "https://a.allegroimg.com/s180/11287d/e4c818ae4965b6101adc6b31bf8d/Niebieski-Smartfon-MOTOROLA-Moto-E7-Power-4-64GB",
      price: 499.0,
      amount: 2,
    },
    {
      id: "2c",
      name: "Samsung A50 4G LTE 128GB/4GB GWARANCJA Sklep",
      img: "https://a.allegroimg.com/s180/111027/64d6f9604e659010ed665c6fc167/Samsung-A50-4G-LTE-128GB-4GB-GWARANCJA-Sklep",
      price: 679.99,
      amount: 1,
    },
    {
      id: "3c",
      name: "Samsung A50 4G LTE 128GB/4GB GWARANCJA Sklep",
      img: "https://a.allegroimg.com/s180/111027/64d6f9604e659010ed665c6fc167/Samsung-A50-4G-LTE-128GB-4GB-GWARANCJA-Sklep",
      price: 679.99,
      amount: 1,
    },
    {
      id: "4c",
      name: "Samsung A50 4G LTE 128GB/4GB GWARANCJA Sklep",
      img: "https://a.allegroimg.com/s180/111027/64d6f9604e659010ed665c6fc167/Samsung-A50-4G-LTE-128GB-4GB-GWARANCJA-Sklep",
      price: 679.99,
      amount: 1,
    },
    {
      id: "5c",
      name: "Samsung A50 4G LTE 128GB/4GB GWARANCJA Sklep",
      img: "https://a.allegroimg.com/s180/111027/64d6f9604e659010ed665c6fc167/Samsung-A50-4G-LTE-128GB-4GB-GWARANCJA-Sklep",
      price: 679.99,
      amount: 1,
    },
  ];

  const cartItems = offers.map(item => {
    return <CartItem key={item.id} item={item} />;
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
        <ul className={classes["cart-items-list"]}>{cartItems}</ul>
      </Modal>
    </li>
  );
};

export default Cart;

import React from "react";
import Cart from "../Cart/Cart";
import LoginButton from "./LoginButton";

import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul className={classes["nav-list"]}>
        <li>
          <img
            src="https://assets.allegrostatic.com/metrum/icon/star-empty-2c3f1d6b0f.svg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://assets.allegrostatic.com/metrum/icon/chat-8dd2f8c308.svg"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://assets.allegrostatic.com/metrum/icon/bell-034065f63b.svg"
            alt=""
          />
        </li>
        <li>
          <Cart />
        </li>
        <li>
          <LoginButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

import React from "react";

import classes from "./LoginButton.module.css";

const LoginButton = () => {
  return (
    <div className={classes["login-button"]}>
      <a href="address" className={classes["be-smart"]}>
        bądź
        <img
          src="https://assets.allegrostatic.com/metrum/icon/smart-098a60541f.svg"
          alt=""
        />
      </a>
      <div className={classes["my-allegro"]}>
        <p>Moje Allegro</p>
        <img
          className={`${classes["dropdown-login"]} dropdown-icon`}
          src="https://assets.allegrostatic.com/metrum/icon/arrowhead-9148b8f39c.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default LoginButton;

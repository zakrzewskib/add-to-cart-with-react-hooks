import React from "react";
import { useMediaQuery } from "react-responsive";

import classes from "./LoginButton.module.css";

const LoginButton = () => {
  const isLessThan1200px = useMediaQuery({ query: "(max-width: 1200px)" });

  return (
    <>
      {isLessThan1200px && (
        <img
          src="https://assets.allegrostatic.com/metrum/icon/user-0135502fa4.svg"
          alt=""
        ></img>
      )}
      {!isLessThan1200px && (
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
      )}
    </>
  );
};

export default LoginButton;

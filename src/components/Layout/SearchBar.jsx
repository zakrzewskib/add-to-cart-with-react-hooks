import React from "react";

import classes from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    // TODO - 'szukaj wielu' should disappear when user types sth in input
    <form className={classes["search-form"]}>
      <div className={classes["input-container"]}>
        <input type="text" placeholder="czego szukasz?" size="30" />
        <button className={classes["link-button"]}>szukaj wielu</button>
      </div>
      <div className={classes["categories"]}>
        Telefony i Akcesoria
        <img
          src="https://assets.allegrostatic.com/metrum/icon/arrowhead-9148b8f39c.svg"
          alt=""
        />
      </div>
      <button className={classes["primary-button"]}>Szukaj</button>
    </form>
  );
};

export default SearchBar;

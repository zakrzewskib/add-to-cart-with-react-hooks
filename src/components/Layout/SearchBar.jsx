import React from "react";

import classes from "./SearchBar.module.css";

const SearchBar = props => {
  return (
    // TODO - 'szukaj wielu' should disappear when user types sth in input
    <form className={classes["search-form"]}>
      <div className={classes["input-container"]}>
        <input type="text" placeholder="czego szukasz?" />
        <button className={classes["link-button"]}>szukaj wielu</button>
      </div>
      <div className={classes["categories-and-search"]}>
        <div className={classes["categories"]}>
          Telefony i Akcesoria
          <img
            className="dropdown-icon"
            src="https://assets.allegrostatic.com/metrum/icon/arrowhead-9148b8f39c.svg"
            alt=""
          />
        </div>
        <button className={classes["primary-button"]}>Szukaj</button>
      </div>
    </form>
  );
};

export default SearchBar;

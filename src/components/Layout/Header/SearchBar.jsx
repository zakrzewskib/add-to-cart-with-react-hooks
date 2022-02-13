import React, { useState } from "react";

import classes from "./SearchBar.module.css";

const SearchBar = props => {
  const [focused, setFocused] = useState(false);

  const onFocus = () => setFocused(true); // TODO add animation on disappearing button
  const onBlur = () => setFocused(false);

  return (
    <form className={classes["search-form"]}>
      <div className={classes["input-container"]}>
        <input
          type="text"
          placeholder="czego szukasz?"
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {!focused && (
          <button className={classes["link-button"]}>szukaj wielu</button>
        )}
      </div>
      {!props.isMobile && (
        <div className={classes["categories-and-search"]}>
          <div className={classes["categories"]}>
            Telefony i Akcesoria
            <img
              className="dropdown-icon"
              src="https://assets.allegrostatic.com/metrum/icon/arrowhead-9148b8f39c.svg"
              alt=""
            />
          </div>
          <button className="primary-button">Szukaj</button>
        </div>
      )}
      {props.isMobile && (
        <button
          className={`primary-button ${classes["primary-button-mobile"]}`}
        >
          <img
            src="https://assets.allegrostatic.com/metrum/icon/magnifying-glass-fb277ba2cf.svg"
            alt=""
          />
        </button>
      )}
    </form>
  );
};

export default SearchBar;

import React from "react";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";

import { useMediaQuery } from "react-responsive";

import classes from "./Header.module.css";

const Header = () => {
  const isLessThan1000px = useMediaQuery({ query: "(max-width: 1030px)" });

  return (
    <header className={`${classes["header"]} container`}>
      <div className={classes["header-flex"]}>
        <img
          className={classes["header-logo"]}
          src="https://assets.allegrostatic.com/metrum/brand/allegro-347440b030.svg"
          alt="Allegro.pl - wygodne i bezpieczne zakupy online, największy wybór ofert"
        />
        {!isLessThan1000px && <SearchBar />}
        <Navigation />
      </div>
      {isLessThan1000px && <SearchBar changedLayout={isLessThan1000px} />}
    </header>
  );
};

export default Header;

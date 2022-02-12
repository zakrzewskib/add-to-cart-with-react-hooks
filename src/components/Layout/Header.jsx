import React from "react";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        src="https://assets.allegrostatic.com/metrum/brand/allegro-347440b030.svg"
        alt="Allegro.pl - wygodne i bezpieczne zakupy online, największy wybór ofert"
      />
      <SearchBar />
      <Navigation />
    </header>
  );
};

export default Header;

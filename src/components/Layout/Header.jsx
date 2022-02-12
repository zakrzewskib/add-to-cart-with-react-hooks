import React from "react";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";

import classes from "./Header.module.css";
import LoginButton from "./LoginButton";

const Header = () => {
  return (
    <header className={`${classes["header"]} container`}>
      <img
        className={classes["header-logo"]}
        src="https://assets.allegrostatic.com/metrum/brand/allegro-347440b030.svg"
        alt="Allegro.pl - wygodne i bezpieczne zakupy online, największy wybór ofert"
      />
      <SearchBar />
      <Navigation />
      <LoginButton />
    </header>
  );
};

export default Header;

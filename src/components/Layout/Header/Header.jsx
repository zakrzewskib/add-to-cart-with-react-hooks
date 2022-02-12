import React, { useEffect } from "react";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";

import { useMediaQuery } from "react-responsive";

import classes from "./Header.module.css";

const Header = () => {
  const isLessThan1000px = useMediaQuery({ query: "(max-width: 1030px)" });
  const isLessThan600px = useMediaQuery({ query: "(max-width: 600px)" });

  const isSticky = e => {
    const header = document.getElementById("header");
    const scrollTop = window.scrollY;
    scrollTop >= 70
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  return (
    <div id="header">
      <header className={`${classes["header"]} container`}>
        <div className={classes["header-flex"]}>
          <img
            className={`${
              !isLessThan600px
                ? classes["header-logo"]
                : classes["header-logo-small"]
            }`}
            src="https://assets.allegrostatic.com/metrum/brand/allegro-347440b030.svg"
            alt="Allegro.pl - wygodne i bezpieczne zakupy online, największy wybór ofert"
          />
          {!isLessThan1000px && <SearchBar />}
          <Navigation />
        </div>
        {isLessThan1000px && <SearchBar isMobile={isLessThan600px} />}
      </header>
    </div>
  );
};

export default Header;

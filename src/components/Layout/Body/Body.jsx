import React from "react";
import Breadcrumbs from "./Breadcrumbs";

import classes from "./Body.module.css";
import Offers from "../../Offers/Offers";

import { useMediaQuery } from "react-responsive";

const Body = () => {
  const isLessThan900px = useMediaQuery({ query: "(max-width:900px)" });

  return (
    <div className="body-container">
      <div className="container">
        <header>
          <h1 className={classes["body-header"]}>
            Telefony i Akcesoria <span>(11 624 248 ofert)</span>
          </h1>
          <Breadcrumbs />
        </header>

        <main className={classes["body-content"]}>
          {!isLessThan900px && (
            <nav className={classes["subcategories"]}>
              <h2>Podkategorie</h2>
            </nav>
          )}
          <article
            className={`${
              !isLessThan900px
                ? classes["sponsored-and-offers"]
                : classes["sponsored-and-offers-mobile"]
            }`}
          >
            <section className={classes["sponsored"]}>
              <h2>Sponsorowane</h2>
            </section>
            <section className={classes["offers"]}>
              <Offers />
            </section>
          </article>
        </main>
      </div>
    </div>
  );
};

export default Body;

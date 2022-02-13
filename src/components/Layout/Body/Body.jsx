import React from "react";
import Breadcrumbs from "./Breadcrumbs";

import classes from "./Body.module.css";
import Offers from "../../Offers/Offers";

import { useMediaQuery } from "react-responsive";

const Body = () => {
  const isLessThan900px = useMediaQuery({ query: "(max-width:900px)" });

  return (
    <div>
      <h1 className={classes["body-header"]}>
        Telefony i Akcesoria <span>(11 624 248 ofert)</span>
      </h1>
      <Breadcrumbs />
      <div className={classes["body-content"]}>
        {!isLessThan900px && (
          <div className={classes["subcategories"]}>
            <h2>Podkategorie</h2>
          </div>
        )}
        <div
          className={`${
            !isLessThan900px
              ? classes["sponsored-and-offers"]
              : classes["sponsored-and-offers-mobile"]
          }`}
        >
          <div className={classes["sponsored"]}>
            <h2>Sponsorowane</h2>
          </div>
          <div className={classes["offers"]}>
            <Offers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;

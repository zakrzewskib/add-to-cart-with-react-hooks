import React from "react";
import Breadcrumbs from "./Breadcrumbs";

import classes from "./Body.module.css";

const Body = () => {
  return (
    <div>
      <h1 className={classes["body-header"]}>Telefony i Akcesoria</h1>

      <Breadcrumbs />

      <div className={classes["body-content"]}>
        <div className={classes["subcategories"]}>
          <h2>Podkategorie</h2>
        </div>
        <div className={classes["sponsored-and-offers"]}>
          <div className={classes["sponsored"]}>
            <h2>Sponsorowane</h2>
          </div>
          <div className={classes["offers"]}>Oferty</div>
        </div>
      </div>
    </div>
  );
};

export default Body;

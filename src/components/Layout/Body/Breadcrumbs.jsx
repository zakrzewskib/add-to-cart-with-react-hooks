import React from "react";

import classes from "./Breadcrumbs.module.css";

const Breadcrumbs = () => {
  return (
    <ul className={classes["breadcrumbs"]}>
      <li>Allegro</li>
      <li>Elektronika</li>
      <li className={classes["active"]}>Telefony i Akcesoria</li>
    </ul>
  );
};

export default Breadcrumbs;

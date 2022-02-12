import React from "react";

import classes from "./Breadcrumbs.module.css";

const Breadcrumbs = () => {
  return (
    <ul className={classes["breadcrumbs"]}>
      <li>
        <a href="placeholder">Allegro</a>
      </li>
      <li>
        <a href="placeholder">Elektronika</a>
      </li>
      <li className={classes["active"]}>
        <a href="placeholder">Telefony i Akcesoria</a>
      </li>
    </ul>
  );
};

export default Breadcrumbs;

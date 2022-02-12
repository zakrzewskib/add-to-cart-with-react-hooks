import React from "react";
import classes from "./Modal.module.css";

const Modal = () => {
  return (
    <div className={classes["modal"]}>
      <button className="primary-button">Dodaj do koszyka</button>
    </div>
  );
};

export default Modal;

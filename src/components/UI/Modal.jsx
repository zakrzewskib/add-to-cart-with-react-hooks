import React from "react";
import classes from "./Modal.module.css";

const Modal = props => {
  return (
    <div
      className={`${classes["modal"]} ${
        props.isHovering ? classes["block"] : ""
      }
  `}
    >
      <button className="primary-button">Dodaj do koszyka</button>
    </div>
  );
};

export default Modal;

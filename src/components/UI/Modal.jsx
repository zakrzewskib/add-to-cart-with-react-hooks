import React from "react";
import classes from "./Modal.module.css";

const Modal = props => {
  return (
    <div
      className={`${classes[props.myClass]} ${
        props.isHovering ? classes["block"] : ""
      } 
      `}
    >
      {props.children}
    </div>
  );
};

export default Modal;

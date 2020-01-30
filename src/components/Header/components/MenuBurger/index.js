import React from "react";
import classes from "./MenuBurger.module.scss";

const menuBurger = props => {
  return (
    <div className={classes.MenuBurger} onClick={props.onClick}>
      <div className={classes.MenuBurger__iconLeft}></div>
      <div className={classes.MenuBurger__icon}></div>
      <div className={classes.MenuBurger__iconRight}></div>
    </div>
  );
};

export default menuBurger;

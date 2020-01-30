import React from "react";
import classes from "./MenuPop.module.scss";

const menuPop = props => {
  return (
    <div
      className={classes.menuPop}
      onClick={props.menuPopClicked}
      style={props.style}
    >
      <div className={classes.menuPop__Content}>
        <div className={classes.menuPop__Header}>MENU</div>
        <hr />
        <div className={classes.menuPop__Menu}>
          <a href="/" className={classes.menuPop__MenuItem}>
            <i className="fa fa-home"></i>
            <span>Home</span>
          </a>
          <a href="/" className={classes.menuPop__MenuItem}>
            <i className="fa fa-bookmark"></i>
            <span>Bookmark</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default menuPop;

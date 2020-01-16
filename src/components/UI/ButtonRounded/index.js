import React from 'react';
import classes from './ButtonRounded.module.scss';

const btnRounded = (props) => {
    return (
        <div className={classes.BtnWrapper}>
            <a className={classes.BtnWhite} href={props.href}>
                <img className={classes.BtnImg} src={require("../../../assets/logo/" + props.type + ".svg")} alt={props.type} />
                <span>{props.children}</span>
            </a>
        </div>
    );
}

export default btnRounded;
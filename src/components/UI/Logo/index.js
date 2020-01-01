import React from 'react';
import classes from './Logo.module.scss'

import logo_img from '../../../assets/logo/logo-no-bg.svg';

const logo = (props) => {
    return (
        <div className={classes[props.type]}>
            <img className={classes[props.typeLogo]} src={logo_img} alt="MovieQ" />
            <span className={classes.logoTextInline}>{props.children}</span>
            <div className={classes.logoTextBelow}>{props.textBelow}</div>
        </div>
    );
}

export default logo;
import React from 'react';
import classes from './DetailMuted.module.scss';

const detailMuted = (props) => {
    return (
        <div className={classes.DetailMuted}>
            <i className={classes[props.type]}></i>
            {props.children}
        </div>
    );
}

export default detailMuted;
import React from 'react';
import classes from './DetailBadge.module.scss';

const detailBadge = (props) => {
    return (
        <div className={classes.DetailBadge}>
            {props.children}
        </div>
    );
}

export default detailBadge;
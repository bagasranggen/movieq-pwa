import React from 'react';
import classes from './Content.module.scss';

const content = (props) => {
    return (
        <div className={classes[props.type]}>
            {props.children}
        </div>
    );
}

export default content;
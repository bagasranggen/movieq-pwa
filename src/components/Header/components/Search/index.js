import React from 'react';
import classes from './Search.module.scss';

const search = (props) => {
    return (
        <form onFocus={props.focused} className={classes.Form} style={props.style}>
            <input onClick={props.clicked} onBlur={props.blurred} className={classes.Input} type="search" />
        </form>
    );
}

export default search;
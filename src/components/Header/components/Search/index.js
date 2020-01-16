import React from 'react';
import classes from './Search.module.scss';

const Search = props => {

    return (
        <form 
            onFocus={props.focused}
            className={classes.Form} 
            style={props.style}
            onSubmit={props.onSubmit}>
            <input 
                onClick={props.clicked} 
                onBlur={props.blurred} 
                className={classes.Input} 
                value={props.value}
                onChange={props.onChange}
                type="search" />
            </form>
    );
}

export default Search;
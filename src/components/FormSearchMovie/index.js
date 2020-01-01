import React from 'react';
import Button from '../UI/Button';
import classes from './FormSearchMovie.module.scss';

const formSearchMovie = (props) => {
    return (
        <div className={classes.FormWrapper}>
            <form className={classes.Form}>
                <input className={classes.Form__input} type="text" placeholder={props.placeholder} />
                <Button type="MainBtnForm">SEARCH</Button>
            </form >
        </div>
    );
}

export default formSearchMovie;
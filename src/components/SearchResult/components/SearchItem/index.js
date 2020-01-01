import React from 'react';
import classes from './SearchItem.module.scss';

const searchItem = (props) => {
    return (
        <div className={classes.SearchItem}>
            <div className={classes.ImgWrapper}>
                <img className={classes.Img} src={props.src} alt={props.alt} />
            </div>
            <div className={classes.MovieTitle}>{props.children}</div>
        </div>
    );
}

export default searchItem;
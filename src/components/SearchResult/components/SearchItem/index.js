import React from 'react';
import classes from './SearchItem.module.scss';

const searchItem = (props) => {
    return (
        <div className={classes.SearchItem}>
            <a href={"movie?=" + props.href}>
                <div className={classes.ImgWrapper}>
                    <img className={classes.Img} src={props.src} alt={props.alt} />
                </div>
                <div className={classes.MovieTitle}>{props.children}</div>
            </a>
        </div>
    );
}

export default searchItem;
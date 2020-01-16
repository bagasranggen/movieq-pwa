import React from 'react';
import classes from './Rating.module.scss';

// import imdb from '../../../../assets/logo/imdb.png';
// import rotten from '../../../../assets/logo/rotten.png';
// import meta from '../../../../assets/logo/meta.png';

const rating = (props) => {
    return (
        <div className={classes.Rating}>
            <img className={classes.RatingIcon} src={require("../../../../assets/logo/" + props.type + ".png")} alt={props.type} />
            <span>{props.children}</span>
        </div>
    );
}

export default rating;
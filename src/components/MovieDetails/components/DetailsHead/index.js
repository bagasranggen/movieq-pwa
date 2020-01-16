import React, {useEffect, useState} from 'react';
import classes from './DetailsHead.module.scss'

import DetailMuted from '../DetailMuted';
import DetailBadge from '../DetailBadge';
import Rating from '../Rating';

const DetailsHead = (props) => {
    const [movieGenre, setMovieGenre] = useState([])

    useEffect(() => {
        const currentUrl = window.location.href.split('=');
        fetch('http://www.omdbapi.com/?apikey=189e4142&i=' + currentUrl[1])
            .then(response => response.json())
            .then(data => {
                setMovieGenre(data.Genre.split(','))
            });

    }, []);

    const genre = movieGenre.map(genre => <DetailBadge>{genre}</DetailBadge>)

    return (
        <div className="row">
            <div className="col-6"><img className="w-100" src={props.poster} alt="" /></div>
            <div className="col-6">
                <div className={classes.HeadContent}>
                    <h5 className={classes.HeadTitle}>{props.title}</h5>
                    <div className={classes.HeadDetail}>
                        <DetailMuted type="IconCalendar">{props.year}</DetailMuted>
                        <DetailMuted type="IconClock">{props.runtime}</DetailMuted>
                        <DetailMuted type="IconInfo">{props.rated}</DetailMuted>
                    </div>
                    <div className={classes.HeadDetail}>
                        {genre}
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className={classes.HeadContent}>
                    <div className={classes.HeadDetailRating}>
                        <Rating type="imdb">{props.rateImdb}</Rating>
                        <Rating type="rotten">{props.rateRotten}</Rating>
                        <Rating type="meta">{props.rateMeta}</Rating>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsHead;
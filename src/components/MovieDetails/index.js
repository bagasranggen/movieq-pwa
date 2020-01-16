import React, { useEffect, useState } from 'react';
import DetailsHead from './components/DetailsHead';
import DetailsBody from './components/DetailsBody';
import DetailsFooter from './components/DetailsFooter';
import Spinner from '../../components/UI/Spinner';

import NA from '../../assets/search-item-img/not-avail.png';

const MovieDetails = () => {
    const [isLoad, setIsLoad] = useState(true);
    const [userKey, setUserKey] = useState('');
    const [movieDetails, setMovieDetails] = useState({});
    const [movieRates, setMovieRates] = useState([]);

    useEffect(() => {
        const currentUrl = window.location.href.split('=');
        setUserKey(currentUrl[1]);

        setIsLoad(true);

        fetch('http://www.omdbapi.com/?apikey=189e4142&i=' + currentUrl[1])
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data)
                setMovieRates(data.Ratings.map(rate => rate.Value))
            });

        setIsLoad(false);

    }, [userKey]);

    return (
        <>
            {isLoad === true ? <Spinner /> :
                <>
                    <DetailsHead
                        poster={movieDetails.Poster === "N/A" ? NA : movieDetails.Poster}
                        title={movieDetails.Title}
                        year={movieDetails.Year}
                        runtime={movieDetails.Runtime}
                        rated={movieDetails.Rated}
                        rateImdb={movieRates[0] == null ? "-" : movieRates[0]}
                        rateRotten={movieRates[1] == null ? "-" : movieRates[1]}
                        rateMeta={movieRates[2] == null ? "-" : movieRates[2]}
                    />
                    <DetailsBody
                        actors={movieDetails.Actors}
                        director={movieDetails.Director}
                        writer={movieDetails.Writer}
                        plot={movieDetails.Plot} />
                    <DetailsFooter />
                </>
            }
        </>
    );
}

export default MovieDetails;
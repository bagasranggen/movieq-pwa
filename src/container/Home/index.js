import React, { useState, useEffect } from 'react';
import Section from '../../components/UI/Section';
import Header from '../../components/Header';

import SearchResult from '../../components/SearchResult';
import SearchItem from '../../components/SearchResult/components/SearchItem';
import Spinner from '../../components/UI/Spinner';

import NA from '../../assets/search-item-img/not-avail.png';

const Home = (props) => {
    const [userKey, setUserKey] = useState('');
    const [movies, setMovies] = useState([]);
    const [isLoad, setIsLoad] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const currentUrl = window.location.href.split('=');
        setUserKey(currentUrl[1]);

        setIsLoad(true)

        fetch('https://www.omdbapi.com/?apikey=189e4142&s=' + currentUrl[1])
            .then(response => response.json())
            .then(data => setMovies(data.Search));

        setIsLoad(false);

    }, [userKey]);

    const changeHandler = event => {
        setSearch(event.target.value)
    }

    const formSearchHandler = event => {
        event.preventDefault();
        setIsLoad(true)
        setUserKey(search)

        props.history.push('/home?=' + search);
        fetch('https://www.omdbapi.com/?apikey=189e4142&s=' + search)
            .then(response => response.json())
            .then(data => setMovies(data.Search));

        setIsLoad(false);
    }


    const searchItem = movies.map((movie) => (
        <SearchItem
            src={movie.Poster === "N/A" ? NA : movie.Poster}
            alt={movie.Title}
            href={movie.imdbID}
            key={movie.imdbID}>{movie.Title}</SearchItem>
    ));

    return (
        <>
            <Header onSubmit={formSearchHandler} onChange={changeHandler} value={search} type="circleGradientHidden" />
            <Section>
                {isLoad === true ? <Spinner /> :
                    <>
                        <SearchResult>{userKey}</SearchResult>
                        <div className="row">
                            {searchItem}
                        </div>
                    </>
                }
            </Section>
        </>
    );
}

export default Home;
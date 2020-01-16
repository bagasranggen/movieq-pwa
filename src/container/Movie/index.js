import React, {useState} from 'react';
import Section from '../../components/UI/Section';
import Header from '../../components/Header';
import MovieDetails from '../../components/MovieDetails';

const Movie = (props) => {
    const [search, setSearch] = useState('');

    const formSearchHandler = event => {
        event.preventDefault();
        props.history.replace('/home?=' + search);
    }
    const changeHandler = event => {
        setSearch(event.target.value)
    }

    return (
        <>
            <Header onSubmit={formSearchHandler} onChange={changeHandler} value={search} type="circleGradientExpanded" />
            <Section>
                <MovieDetails titleHead={props.children} />
            </Section>
        </>
    );
}

export default Movie;
import React from 'react';
import Section from '../../components/UI/Section';
import Header from '../../components/Header';
import MovieDetails from '../../components/MovieDetails';

const movie = () => {
    return (
        <>
            <Header />
            <Section>
                <MovieDetails />
            </Section>
        </>
    );
}

export default movie;
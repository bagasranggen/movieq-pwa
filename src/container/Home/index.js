import React from 'react';
import Section from '../../components/UI/Section';
import Header from '../../components/Header';
import SearchResult from '../../components/SearchResult';

const home = (props) => {
    return (
        <>
            <Header />
            <Section>
                <SearchResult>Test</SearchResult>
            </Section>
        </>
    );
}

export default home;
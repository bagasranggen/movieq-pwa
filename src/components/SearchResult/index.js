import React from 'react';
import SearchItem from './components/SearchItem';

import img1 from '../../assets/search-item-img/godzilla.jpg'

const searchResult = (props) => {
    return (
        <>
            <div className="text-center mb-3">
                Search result for <b>"{props.children}"</b>
            </div>
            <div className="row">
                <SearchItem src={img1} alt="Godzilla">Test</SearchItem>
                <SearchItem src={img1} alt="Godzilla">Test</SearchItem>
                <SearchItem src={img1} alt="Godzilla">Test</SearchItem>
                <SearchItem src={img1} alt="Godzilla">Test</SearchItem>
            </div>
        </>
    );
}

export default searchResult;
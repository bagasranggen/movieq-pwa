import React from 'react';

const searchResult = (props) => {
    return (
        <>
            <div className="text-center my-4">
                Search result for <b>"{props.children}"</b>
            </div>
        </>
    );
}

export default searchResult;
import React from 'react';
import Button from '../../../UI/ButtonRounded';

const detailsFooter = (props) => {
    return (
        <div className="row">
            <Button type="bookmark" href="#">Bookmark</Button>
            <Button type="share" href="#">Share</Button>
        </div>
    );
}

export default detailsFooter;
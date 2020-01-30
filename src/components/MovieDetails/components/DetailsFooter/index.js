import React from 'react';
import Button from '../../../UI/ButtonRounded';

const detailsFooter = (props) => {
    return (
        <div className="row">
            <div className="offset-md-1 col-md-5 col-6">
                <Button type="bookmark" href="#">Bookmark</Button>
            </div>
            <div className="col-md-5 col-6">
                <Button type="share" href="#">Share</Button>
            </div>
        </div>
    );
}

export default detailsFooter;
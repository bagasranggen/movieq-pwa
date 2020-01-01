import React from 'react';
import classes from './DetailsHead.module.scss'

import img1 from '../../../../assets/search-item-img/godzilla.jpg'

const detailsHead = (props) => {
    return (
        <div className="row">
            <div className="col-6"><img className="w-100" src={img1} alt="" /></div>
            <div className="col-6">
                <div className={classes.HeadContent}>
                    <h5>Godzilla</h5>
                    <div ></div>
                </div>
            </div>
        </div>
    );
}

export default detailsHead;
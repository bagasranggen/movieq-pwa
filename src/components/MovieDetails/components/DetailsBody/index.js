import React from 'react';
import classes from './DetailsBody.module.scss';

import Content from '../Content';

const detailsBody = (props) => {
    return (
        <div className="mt-2">
            <Content type="ContentStar">{props.actors}</Content>
            <Content type="Content">
                <div className={classes.Detail}>
                    <div className={classes.DetailTitle}>Director</div>
                    <div className={classes.DetailContent}>{props.director}</div>
                </div>
                <div className={classes.Detail}>
                    <div className={classes.DetailTitle}>Writer</div>
                    <div className={classes.DetailContent}>{props.writer}</div>
                </div>
            </Content>
            <Content type="ContentDescription">{props.plot}</Content>
        </div>
    );
}

export default detailsBody;
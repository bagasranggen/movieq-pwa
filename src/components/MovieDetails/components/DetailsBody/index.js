import React from "react";
import classes from "./DetailsBody.module.scss";
import Skeleton from "react-loading-skeleton";

import Content from "../Content";

const detailsBody = props => {
  return (
    <div className="row">
      <div className="offset-md-1 col-md-10 col-12">
        <div className="mt-2">
          <Content type="ContentStar">
            {props.isLoad ? props.actors : <Skeleton />}
          </Content>
          <Content type="Content">
            <div className={classes.Detail}>
              <div className={classes.DetailTitle}>Director</div>
              <div className={classes.DetailContent}>
                {props.isLoad ? props.director : <Skeleton />}
              </div>
            </div>
            <div className={classes.Detail}>
              <div className={classes.DetailTitle}>Writer</div>
              <div className={classes.DetailContent}>
                {props.isLoad ? props.writer : <Skeleton />}
              </div>
            </div>
          </Content>
          <Content type="ContentDescription">
            {props.isLoad ? props.plot : <Skeleton />}
          </Content>
        </div>
      </div>
    </div>
  );
};

export default detailsBody;

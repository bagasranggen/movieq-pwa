import React, { useEffect, useState } from "react";
import classes from "./DetailsHead.module.scss";
import Skeleton from "react-loading-skeleton";

import DetailMuted from "../DetailMuted";
import DetailBadge from "../DetailBadge";
import Rating from "../Rating";

const DetailsHead = props => {
  const [movieGenre, setMovieGenre] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const onLoadedHandler = () => {
    setLoaded(true);
  };

  useEffect(() => {
    const currentUrl = window.location.href.split("=");
    fetch("https://www.omdbapi.com/?apikey=189e4142&i=" + currentUrl[1])
      .then(response => response.json())
      .then(data => {
        setMovieGenre(data.Genre.split(","));
      });
  }, []);

  const genre = movieGenre.map(genre => <DetailBadge>{genre}</DetailBadge>);

  return (
    <div className="row">
      <div className="offset-md-1 col-md-5 col-6">
        <div className={classes.HeadImage__wrapper}>
          {!loaded && <Skeleton height="799px" />}
          <img
            className="w-100"
            src={props.poster}
            alt={props.title}
            style={{ display: loaded ? "block" : "none" }}
            onLoad={onLoadedHandler}
          />
        </div>
      </div>
      <div className="col-md-5 col-6">
        <div className={classes.HeadContent}>
          <h5 className={classes.HeadTitle}>
            {props.isLoad ? props.title : <Skeleton width="80%" />}
          </h5>
          <div className={classes.HeadDetail}>
            <DetailMuted type="IconCalendar">
              {props.isLoad ? props.year : <Skeleton />}
            </DetailMuted>
            <DetailMuted type="IconClock">
              {props.isLoad ? props.runtime : <Skeleton />}
            </DetailMuted>
            <DetailMuted type="IconInfo">
              {props.isLoad ? props.rated : <Skeleton />}
            </DetailMuted>
          </div>
          <div className={classes.HeadDetailGenre}>{genre}</div>
        </div>
      </div>
      <div className="offset-md-1 col-md-10 col-12">
        <div className={classes.HeadContent}>
          <div className={classes.HeadDetailRating}>
            <Rating type="imdb">
              {props.isLoad ? props.rateImdb : <Skeleton width="70%" />}
            </Rating>
            <Rating type="rotten">
              {props.isLoad ? props.rateRotten : <Skeleton width="70%" />}
            </Rating>
            <Rating type="meta">
              {props.isLoad ? props.rateMeta : <Skeleton width="70%" />}
            </Rating>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsHead;

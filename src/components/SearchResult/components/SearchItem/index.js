import React, { useState } from "react";
import classes from "./SearchItem.module.scss";
import Skeleton from "react-loading-skeleton";

const SearchItem = props => {
  const [loaded, setLoaded] = useState(false);

  const onLoadedHandler = () => {
    console.log("loaded");
    setLoaded(true);
  };

  return (
    <div className={classes.SearchItem}>
      <a href={"movie?=" + props.href}>
        <div className={classes.ImgWrapper}>
          {!loaded && (
            <div style={{ position: "absolute", width: "100%", bottom: "0" }}>
              <Skeleton height={450} />
            </div>
          )}
          <img
            className={classes.Img}
            src={props.src}
            alt={props.alt}
            style={{ display: loaded ? "block" : "none" }}
            onLoad={onLoadedHandler}
          />
        </div>
        <div className={classes.MovieTitle}>
          {props.isLoad ? <Skeleton width="80%" /> : props.children}
        </div>
      </a>
    </div>
  );
};

export default SearchItem;

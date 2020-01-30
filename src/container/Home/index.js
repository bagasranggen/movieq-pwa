import React, { useState, useEffect } from "react";
import Section from "../../components/UI/Section";
import Header from "../../components/Header";
// import Skeleton from "react-loading-skeleton";

import SearchResult from "../../components/SearchResult";
import SearchItem from "../../components/SearchResult/components/SearchItem";

import NA from "../../assets/search-item-img/not-avail.png";

const Home = props => {
  const [userKey, setUserKey] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const currentUrl = window.location.href.split("=");
    setUserKey(currentUrl[1]);

    async function fetchData() {
      setIsLoad(false);
      try {
        const fetcher = await window.fetch(
          "https://www.omdbapi.com/?apikey=189e4142&s=" + currentUrl[1]
        );
        const response = await fetcher.json();
        setMovies(response.Search);
      } catch (error) {
        // DO SOMETHING
        // alert(error);
        // props.history.push("/");
      } finally {
        setIsLoad(true);
      }
    }
    fetchData();
  }, [window.location.href]);

  const changeHandler = event => {
    setSearch(event.target.value);
  };

  const formSearchHandler = event => {
    event.preventDefault();
    setUserKey(search);
    props.history.push("/home?=" + search);
  };

  const searchItem = movies.map(movie => (
    <SearchItem
      isLoad={!isLoad}
      src={movie.Poster === "N/A" ? NA : movie.Poster}
      alt={movie.Title}
      href={movie.imdbID}
      key={movie.imdbID}
    >
      {movie.Title}
    </SearchItem>
  ));

  return (
    <>
      <Header
        onSubmit={formSearchHandler}
        onChange={changeHandler}
        value={search}
        type="circleGradientHidden"
      />
      <Section>
        <SearchResult>{userKey}</SearchResult>
        <div className="row">{searchItem}</div>
      </Section>
    </>
  );
};

export default Home;

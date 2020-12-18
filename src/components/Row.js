import React, { useState, useEffect } from "react";
import axios from "../components/axios";
import "../components/css-files/row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
// import requests from "./requests";

const base_url = "https://image.tmdb.org/t/p/original/";
// const base_url = "https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US"

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // when the function runs, the row will appear, pulling the information from the tmdb api
  // run once when the row loads, then dont run it again => anytime movies changes the code will run
  useEffect(() => {
    // async function
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //   console.log(requests.data.results);
      setMovies(request.data.results);
      return request;
      // Insert URL (55:20 in vid)
    }
    fetchData();
  }, [fetchUrl]);
  // first argument in function, second in square brackets
  //   console.table(movies);
  // look up useEffect (always place variable) -> variable being passed from outside block...useEffect needs to know this.
  // use state to keep track of the movies

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    // if video was open because of trailerurl, then set url to empty to close the video...functionality when you click it twice
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      // empty string is there because sometimes the trailers do not have a name
      movieTrailer(movie.name || movie.title || movie.id)
        .then((url) => {
          // passes in the url
          // this allows us to do a get for the "v" which is in all the youtube links
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {/* container -> several_row_posters */}

        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
        {/* <img src={`${base_url}`}/> */}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      {/* when u have a trailer url THEN you show the youtube video */}
    </div>
  );
}

export default Row;

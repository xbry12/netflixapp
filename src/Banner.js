import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  // everytime the page is refreshed you will get a new movie
  useEffect(() => {
    // run once when banner loads, use effect runs a specified condition
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
      // the math function grabs a random number from the array (netflixoriginals)
    }
    fetchData();
  }, []);
  // code from stack overflow (truncate the text)
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* using OR...optional training */}
        {/* {title} */}
        {/* header will have background image */}

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
          {/* div 2 buttons */}
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
          {/* if text is over 150 characters, then you "truncate the text and replace it with an elipsis" */}
          {/* description */}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";

const Series = () => {
  const movies = useSelector((state) => state.movies.movies);
  console.log(movies);

  return (
    <div className="movie">
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <a href={`./movie/${movie.imdbID}`}>
            <img src={movie.Poster} width={100} height={100} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Series;

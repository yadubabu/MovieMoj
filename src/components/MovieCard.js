import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MovieCard = () => {
  const movies = useSelector((state) => state.movies.movies);
  const movieId = useParams().id;
  console.log(movieId);
  const fecthMovie = movies.filter((movie) => {
    return movieId === movie.imdbID;
  });

  return (
    <div>
      {fecthMovie.map((val) => {
        return (
          <div className="card">
            <h2>{val.Title}</h2>
            <img src={val.Poster} />
            <span>{val.Year}</span>
            <p>{val.Type}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCard;

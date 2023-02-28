export const fetchMovies = (movies) => {
  console.log(movies);
  return {
    type: "FETCH_MOVIES",
    payload: movies,
  };
};

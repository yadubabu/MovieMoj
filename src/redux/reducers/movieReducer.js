const initialValue = {
  movies: [],
};

const movieReducer = (state = initialValue, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case "FETCH_MOVIES":
      return { movies: payload };
    default:
      return state;
  }
};

export default movieReducer;

import movieReducer from "./movieReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  movies: movieReducer,
});

export default reducers;

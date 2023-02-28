import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Episodes from "./components/Episodes";
import Series from "./components/Series";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./redux/actions/movieActions";
import MovieCard from "./components/MovieCard";
import { api } from "./api";

const App = () => {
  const [search, setSearch] = useState("avengers");
  const [type, setType] = useState("movie");
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=caa0f709&type=${type}&s=${search}`
    )
      .then((res) => res.json())
      .then((data) => dispatch(fetchMovies(data.Search)))
      .catch((err) => console.log(err));
  }, []);
  // const fetchType = (id) => {
  //   setType(id);
  // };
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/series" element={<Movies />} />
          <Route path="/episodes" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieCard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

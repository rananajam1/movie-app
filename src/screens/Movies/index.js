import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss";
import MovieCard from "../../components/MovieCard.js";

export default function Movies() {
  const allMovies = useSelector((state) => state.movies.data) || [];
  return (
    <div className="moviesContainer">
      {allMovies?.map((movie, key) => (
        <MovieCard movie={movie} key={key} />
      ))}
    </div>
  );
}

import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss";
import MovieCard from "../../components/MovieCard";
import SectionHeader from "../../components/SetionActionBar";
import { getFilteredMoviesData } from "../../redux/reducers/movies";

export default function Movies() {
  const [searchText, setSearchText] = React.useState("");

  const filteredMovies = useSelector((state) =>
    getFilteredMoviesData(state.movies, searchText)
  );

  return (
    <div>
      <SectionHeader
        label={""}
        onPageChange={() => {}}
        onSearch={(text) => setSearchText(text)}
        pageCount={0}
      />
      <div className="moviesContainer">
        {filteredMovies?.map((movie, key) => (
          <MovieCard movie={movie} key={key} />
        ))}
      </div>
    </div>
  );
}

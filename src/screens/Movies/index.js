import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import MovieCard from "../../components/MovieCard";
import SectionHeader from "../../components/SetionActionBar";
import {
  getFilteredMoviesData,
  getMoviesIsFetching,
} from "../../redux/reducers/movies";
import Loading from "../../components/Loading";
import { getAllMovies } from "../../redux/actions/movies";

export default function Movies() {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = React.useState("");

  const filteredMovies = useSelector((state) =>
    getFilteredMoviesData(state.movies, searchText)
  );
  const isLoading = useSelector((state) => getMoviesIsFetching(state.movies));

  React.useEffect(() => {
    dispatch(getAllMovies());
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
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
      )}
    </div>
  );
}

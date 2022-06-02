import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import Left from "./Left";
import Right from "./Right";
import "./styles.scss";

export default function MovieDetails() {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetchMovieDetailsByID();
    // eslint-disable-next-line
  }, []);

  const fetchMovieDetailsByID = async () => {
    setIsLoading(true);

    try {
      const results = await fetchWrapper.get(`/movie/${id}`);
      setMovieDetails(results);
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div className="movieDetailsContainer">
          <Left id={id} details={movieDetails} />
          <Right id={id} details={movieDetails} />
        </div>
      )}
    </div>
  );
}

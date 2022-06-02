import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { fetchWrapper } from "../../helpers/fetch-wrapper";

export default function MovieDetails() {
  const { id } = useParams();

  //   const [movieDetails, setMovieDetails] = React.useState(null);

  React.useEffect(() => {
    fetchMovieDetailsByID();
    // eslint-disable-next-line
  }, []);

  const fetchMovieDetailsByID = async () => {
    const results = await fetchWrapper.get(`/movie/${id}`);
    console.log("results", results);
  };

  return (
    <div>
      <Navbar />
    </div>
  );
}

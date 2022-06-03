import React from "react";
import BarChart from "../../components/BarChart";
import Loading from "../../components/Loading";
import { fetchWrapper } from "../../helpers/fetch-wrapper";
import "./styles.scss";

function Stats() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [topRatedMovies, setTopRatedMovies] = React.useState([]);

  React.useEffect(() => {
    fetchTopRatedMovies();
  }, []);

  const fetchTopRatedMovies = async () => {
    setIsLoading(true);
    try {
      const { results } = await fetchWrapper.get("/movie/top_rated");
      const top10 = results
        ?.slice(0, 10)
        ?.map(({ vote_average }) => vote_average);
      setTopRatedMovies(top10);
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="statsContainer">
      {isLoading && <Loading isLoading={isLoading} />}
      <BarChart width={800} height={800} data={topRatedMovies} />
    </div>
  );
}

export default Stats;

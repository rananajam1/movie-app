import React from "react";
import Loading from "../../components/Loading";
import { fetchWrapper } from "../../helpers/fetch-wrapper";

export default function Right({ details: { title, overview, runtime }, id }) {
  const [cast, setCast] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetchMovieCreditsByID();
    // eslint-disable-next-line
  }, []);

  const fetchMovieCreditsByID = async () => {
    setIsLoading(true);

    try {
      const { cast } = await fetchWrapper.get(`/movie/${id}/credits`);
      setCast(cast);
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
    }
  };
  return (
    <>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div className="detail-section">
          <div className="section">
            <h1>{title}</h1>
          </div>
          <div className="section">
            <span>{overview}</span>
          </div>
          <div className="section">
            <span>
              Runtime <p>{runtime} mins</p>
            </span>
          </div>
          <div className="section">
            <span>
              Cast<p>{cast?.map((e) => e.name).join(", ")}</p>
            </span>
          </div>
        </div>
      )}
    </>
  );
}

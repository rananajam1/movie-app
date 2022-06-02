import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Rating from "../../components/Rating";
import { getMoviePosterURL } from "../../utils/helper";

export default function Left({
  details: { vote_average, popularity, poster_path },
  id,
}) {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  return (
    <div className="image-section">
      <div className="sections">
        <div className="section">
          <span>Avg. Rating</span>
          <p>
            <b>{vote_average}</b>
            /10
          </p>
        </div>
        <div onClick={() => navigate("/stats")} className="section">
          <span>Popularity</span>
          <p>
            <b>{popularity}</b>
          </p>
        </div>
        {!rating ? (
          <Rating precision={0.25} setRating={setRating} />
        ) : (
          <div onClick={() => setRating(0)} className="section">
            <span>Your Rating</span>
            <p>
              <b>{rating}</b>
              /10
            </p>
          </div>
        )}
      </div>
      <img
        className="poster"
        height={500}
        width={300}
        src={getMoviePosterURL(poster_path)}
        alt="N/A"
      />
    </div>
  );
}

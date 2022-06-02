import React from "react";
import { AiFillStar } from "react-icons/ai";
import SecondaryButton from "../SecondaryButton";
import { useNavigate } from "react-router-dom";

export default function MovieCard({
  movie: { title, poster_path, vote_average, id },
}) {
  const navigate = useNavigate();
  return (
    <div className="movieCard">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        width={"100%"}
        height={500}
        alt="N/A"
      />
      <span>
        <AiFillStar color="yellow" size={20} /> {vote_average}
      </span>
      <p>{title}</p>
      <SecondaryButton onClick={() => navigate(`/movie/${id}`)}>
        View Details
      </SecondaryButton>
    </div>
  );
}

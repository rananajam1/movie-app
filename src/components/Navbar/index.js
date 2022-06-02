import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-dark">
      <div className="container">
        <div onClick={() => navigate(-1)}>
          <AiOutlineLeft size={30} color={"white"} />
          <span>Back</span>
        </div>
      </div>
    </nav>
  );
}

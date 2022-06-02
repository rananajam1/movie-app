import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "./screens/MovieDetails";
import Movies from "./screens/Movies";

export default function AppRoutes() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/" element={<Movies />} />
        </Routes>
      </div>
    </Router>
  );
}

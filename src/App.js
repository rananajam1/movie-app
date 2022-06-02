import React from "react";
import { useDispatch } from "react-redux";
import { getAllMovies } from "./redux/actions/movies";
import "./App.scss";
import Movies from "./screens/Movies";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllMovies());
  });

  return (
    <div className="body">
      <Movies />
    </div>
  );
}

export default App;

import React from "react";
import { useDispatch } from "react-redux";
import { getAllMovies } from "./redux/actions/movies";
import "./App.scss";
import Routes from "./AppRoutes";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllMovies());
  });

  return (
    <div className="body">
      <Routes />
    </div>
  );
}

export default App;

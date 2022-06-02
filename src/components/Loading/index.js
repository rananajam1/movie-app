import React from "react";
import ReactLoading from "react-loading";
import "./styles.scss";

function Loading({ isLoading }) {
  return (
    <div className="loading">
      {isLoading && (
        <ReactLoading type={"bars"} color={"#03fc4e"} height={50} width={50} />
      )}
    </div>
  );
}

export default Loading;

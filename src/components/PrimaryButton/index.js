import React from "react";
// import Loading from "../Loading";
import "./styles.scss";

const PrimaryButton = ({
  style = {},
  className = "",
  onClick = (e) => false,
  disabled = false,
  isLoading = false,
  children,
}) => {
  return (
    <button
      style={style}
      className={`primaryButton ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {/* {isLoading ? <Loading width="16" height="16" invert={true} /> : children} */}
      {children}
    </button>
  );
};

export default PrimaryButton;

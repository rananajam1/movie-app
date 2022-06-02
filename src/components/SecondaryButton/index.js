import React from "react";
import "./styles.scss";

const SecondaryButton = ({
  style = {},
  className = "",
  onClick = (e) => false,
  onMouseEnter = (e) => false,
  onMouseLeave = (e) => false,
  disabled = false,
  idx,
  children,
}) => {
  return (
    <button
      id={idx}
      style={style}
      className={`secondaryButton ${className}`}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;

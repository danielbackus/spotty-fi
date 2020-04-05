import React from "react";

const Button = ({ onClick = () => {}, children = "", disabled = false }) => (
  <button onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

export default Button;

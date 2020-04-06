import React from "react";

const Button = ({
  onClick = () => {},
  children = "",
  disabled = false,
}: {
  onClick?: Function;
  children: React.ReactNode;
  disabled?: boolean;
}) => (
  <button disabled={disabled} onClick={() => onClick()}>
    {children}
  </button>
);

export default Button;

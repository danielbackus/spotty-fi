import * as React from "react";

const styles = {
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  },
  left: {},
  right: {},
};

const Button = ({
  onClick = () => {},
  children = React.Children,
  disabled = false,
  text = "",
  ...props
}: {
  onClick?: Function;
  children?: React.ReactNode;
  disabled?: boolean;
  text?: string;
}) => (
  <button
    disabled={disabled}
    onClick={() => onClick()}
    style={styles.button}
    {...props}
  >
    <div className="fa-button-parent" style={styles.left}>
      {text}
    </div>
    {children}
  </button>
);

export default Button;

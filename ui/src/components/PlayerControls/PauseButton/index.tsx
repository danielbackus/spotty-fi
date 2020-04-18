import React from "react";
import { faPause } from "@fortawesome/free-solid-svg-icons";

import IconButton from "../../Button/IconButton";

const PauseButton = ({ onClick = () => {} }) => (
  <IconButton icon={faPause} onClick={onClick} />
);

export default PauseButton;

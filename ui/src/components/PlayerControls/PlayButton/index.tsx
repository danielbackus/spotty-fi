import React from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import IconButton from "../../Button/IconButton";

const PlayButton = ({ onClick = () => {} }) => (
  <IconButton icon={faPlay} onClick={onClick} />
);

export default PlayButton;

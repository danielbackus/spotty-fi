import React from "react";
import { faFastBackward } from "@fortawesome/free-solid-svg-icons";

import IconButton from "../../Button/IconButton";

const PreviousTrackButton = ({ onClick = () => {} }) => (
  <IconButton icon={faFastBackward} onClick={onClick} />
);

export default PreviousTrackButton;

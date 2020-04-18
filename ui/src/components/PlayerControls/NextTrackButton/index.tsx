import React from "react";
import { faFastForward } from "@fortawesome/free-solid-svg-icons";

import IconButton from "../../Button/IconButton";

const NextTrackButton = ({ onClick = () => {} }) => (
  <IconButton icon={faFastForward} onClick={onClick} />
);

export default NextTrackButton;

import React from "react";
import PlayButton from "../PlayButton";
import PauseButton from "../PauseButton";

const PlayPauseButton = ({ playing = false, onClick = () => {} }) => {
  return playing ? (
    <PlayButton onClick={onClick} />
  ) : (
    <PauseButton onClick={onClick} />
  );
};

export default PlayPauseButton;

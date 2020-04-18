import React from "react";

import PreviousTrackButton from "./PreviousTrackButton";
import PlayPauseButton from "./PlayPauseButton";
import NextTrackButton from "./NextTrackButton";

const PlayerControls = ({ playing = false, onPlayPause = () => {} }) => {
  return (
    <div>
      <PreviousTrackButton />
      <PlayPauseButton playing={playing} onClick={onPlayPause} />
      <NextTrackButton />
    </div>
  );
};

export default PlayerControls;

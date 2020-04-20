import React from "react";

const SpotifyPlayer = (props) => {
  const backgroundStyles = {
    backgroundImage: `url(${props.item.album.images[0].url})`,
  };

  const progressBarStyles = {
    width: (props.progress_ms * 100) / props.item.duration_ms + "%",
  };

  return (
    <div>
      <div>
        <section style={{ marginBottom: "75px" }}>
          <img src={props.item.album.images[0].url} />
        </section>
        <aside>
          <h5>{props.item.name}</h5>
          <h5>{props.item.artists[0].name}</h5>
          <h5>{props.is_playing ? "Playing" : "Paused"}</h5>
          <div>
            <div style={progressBarStyles} />
          </div>
        </aside>
        <div style={backgroundStyles} />
      </div>
    </div>
  );
};
export default SpotifyPlayer;

import React, { FC, useState, useEffect } from "react";
import { ISpotifyPlayerResponse } from "data/entities/Spotify/ISpotifyPlayerResponse";
import ky from "ky";
import { ISpotifyPlayerItem } from "data/entities/Spotify/ISpotifyPlayerItem";
import { ISpotifyPlayerArtist } from "data/entities/Spotify/ISpotifyPlayerArtist";

const SpotifyPlayer = (props: any) => {
  const [progress, setProgress] = useState<number>(0);
  const [song, setSong] = useState<ISpotifyPlayerItem | null>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(props.loginToken as string);

  /**
   * Error handler to bubble up to the parent, currently the login component
   */
  const { onError } = props;

  const backgroundStyles = {
    backgroundImage: `url(${song?.album.images[0].url})`,
  };

  const progressBarStyles = {
    height: "10px",
    background:
      "linear-gradient(to right, #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%)",
    width: progress + "%",
    marginBottom: "20px",
  };

  /**
   * Calls spotify's /player endpoing to fetch user's current playing state
   * and information about any playing songs
   */
  const getCurrentlyPlaying = async () => {
    if (token) {
      try {
        const response = await ky.get("https://api.spotify.com/v1/me/player", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status == 200) {
          const spotifyResponse = (await response.json()) as ISpotifyPlayerResponse;
          setSong(spotifyResponse.item);
          setProgress(
            ((spotifyResponse.progress_ms ?? 0) / (song?.duration_ms ?? 0)) *
              100
          );
          setIsPlaying(spotifyResponse.is_playing);
        }
      } catch (err) {
        //console.error(err);

        /* (from https://developer.spotify.com/documentation/web-api/)
         Note: If Web API returns status code 429, it means that you have sent too many requests. 
         When this happens, check the Retry-After header, where you will see a number displayed. 
         This is the number of seconds that you need to wait, before you try your request again. 
         */
        onError(err);
      }
    }
  };

  /**
   * Will start a setTimeout call, every second, to call getCurrentlyPlaying,
   * to get fresh information on an interval
   */
  useEffect(() => {
    const interval = setTimeout(() => {
      getCurrentlyPlaying();
    }, 1000);
    return () => {
      clearTimeout(interval);
    };
  });

  return (
    <div>
      {token && (
        <div>
          <section style={{ marginBottom: "75px" }}>
            <img src={song?.album.images[0].url} />
          </section>
          <aside>
            <h5>{song?.name}</h5>
            <h5>{song?.artists.map((item) => item.name).join(", ")}</h5>
            <h5>{isPlaying ? "Playing" : "Paused"}</h5>
            <div>
              <div style={progressBarStyles} />
            </div>
          </aside>
          <div style={backgroundStyles} />
        </div>
      )}
    </div>
  );
};
export default SpotifyPlayer;

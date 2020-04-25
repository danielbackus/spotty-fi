import React, { FC, useState, useEffect } from "react";
import { ISpotifyPlayerResponse } from "data/entities/Spotify/ISpotifyPlayerResponse";
import ky from "ky";
import { ISpotifyItemArt } from "data/entities/Spotify/ISpotifyItemArt";
import { ISpotifyPlayerItem } from "data/entities/Spotify/ISpotifyPlayerItem";

const SpotifyPlayer: FC<any | null> = (
  { loginToken }

) => {



  // separate state for
  // albumArt
  // progress
  // duration

  const [progress, setProgress] = useState<number>(0);
  const [song, setSong] = useState<ISpotifyPlayerItem | null>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(loginToken as string);



  const backgroundStyles = {
    backgroundImage: `url(${song?.album.images[0].url})`,

  };

  const progressBarStyles = {
    height: '10px',
    background: 'linear-gradient(to right, #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%)',
    width: progress + '%',
    marginBottom: '20px'
  };





  const getCurrentlyPlaying = async () => {
    if (token) {

      try {
        const response = await ky.get(
          "https://api.spotify.com/v1/me/player",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status == 200) {
          const spotifyResponse = await response.json() as ISpotifyPlayerResponse;
          setSong(spotifyResponse.item);
          setProgress((spotifyResponse.progress_ms ?? 0) / (song?.duration_ms ?? 0) * 100);
          setIsPlaying(spotifyResponse.is_playing);

        }


      } catch (err) {
        //debugger;
        console.error(err);
        setToken(null);
      }
    }
  };


  useEffect(() => {

    const interval = setTimeout(() => {
      getCurrentlyPlaying();
    }, 1000);
    return () => { clearTimeout(interval) }

  }, [progress]); // Only re-run the effect if progress changes*/




  return (
    <div>
      {token && (
        <div >
          <section style={{ marginBottom: "75px" }}>
            <img src={song?.album.images[0].url} />
          </section>
          <aside>
            <h5>{song?.name}</h5>
            <h5>{song?.artists[0].name}</h5>
            <h5>{isPlaying ? "Playing" : "Paused"}</h5>
            <div>
              <div style={progressBarStyles} />
            </div>
          </aside>
          <div style={backgroundStyles} />
        </div>)}
    </div>
  );
};
export default SpotifyPlayer;

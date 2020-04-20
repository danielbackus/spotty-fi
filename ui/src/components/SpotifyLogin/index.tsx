import React, { useState, useEffect } from "react";
import { hash } from "../../utils";
import { SPOTIFY_LOGIN_URL } from "../../constants";
import SpotifyPlayer from "../SpotifyPlayer";
import ky from "ky";
import Button from "components/Button";

const SpotifyLogin = () => {
  const [spotifyApiToken, setSpotifyApiToken] = useState(
    localStorage.getItem("spotifyToken") || hash.access_token
  );
  const [currentPlayingItem, setCurrentlyPlayingItem] = useState({
    album: {
      images: [{ url: "" }],
    },
    name: "",
    artists: [{ name: "" }],
    duration_ms: 0,
  });
  const [isPlaying, setIsPlaying] = useState("Paused");
  const [progress, setProgress] = useState(0);

  const logout = () => {
    localStorage.removeItem("spotifyToken");
    setSpotifyApiToken("");
  };

  localStorage.setItem("spotifyToken", spotifyApiToken);

  useEffect(() => {
    if (spotifyApiToken) {
      const getCurrentlyPlaying = async () => {
        try {
          const response = await ky.get(
            "https://api.spotify.com/v1/me/player",
            {
              headers: {
                Authorization: `Bearer ${spotifyApiToken}`,
              },
            }
          );
          const { item, progress_ms, is_playing } = await response.json();
          setCurrentlyPlayingItem(item);
          setProgress(progress_ms);
          setIsPlaying(is_playing);
        } catch (err) {
          console.error(err);
        }
      };
      getCurrentlyPlaying();
    }
  }, [spotifyApiToken]);

  return (
    <div>
      <div>
        {!spotifyApiToken && (
          <Button>
            <a
              href={SPOTIFY_LOGIN_URL}
              style={{
                color: "white",
              }}
            >
              Login to Spotify
            </a>
          </Button>
        )}
        {spotifyApiToken && (
          <>
            <SpotifyPlayer
              item={currentPlayingItem}
              is_playing={isPlaying}
              progress_ms={progress}
            />
            <Button onClick={logout}>Log out</Button>
          </>
        )}
      </div>
    </div>
  );
};
export default SpotifyLogin;

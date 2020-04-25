import React, { useState, useEffect } from "react";
import { hash } from "../../utils";
import { SPOTIFY_LOGIN_URL } from "../../constants";
import SpotifyPlayer from "../SpotifyPlayer";
import Button from "components/Button";
import ky from "ky";
import { ISpotifyPlayerResponse } from "data/entities/Spotify/ISpotifyPlayerResponse";

const SpotifyLogin = () => {
  const [spotifyApiToken, setSpotifyApiToken] = useState(
    localStorage.getItem("spotifyToken") || hash.access_token
  );

  //const [currentPlayingItem, setCurrentlyPlayingItem] = useState<ISpotifyPlayer>({ loginToken: spotifyApiToken, apiResponse: null });


  const logout = () => {
    localStorage.removeItem("spotifyToken");
    setSpotifyApiToken("");
  };

  localStorage.setItem("spotifyToken", spotifyApiToken);


  useEffect(() => {
    if (spotifyApiToken) {
      //setCurrentlyPlayingItem({ loginToken: spotifyApiToken, apiResponse: null });


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

              loginToken={spotifyApiToken}

            />
            <Button onClick={logout}>Log out</Button>
          </>
        )}
      </div>
    </div>
  );
};
export default SpotifyLogin;

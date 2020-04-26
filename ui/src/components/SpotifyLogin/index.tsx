import React, { useState } from "react";
import { hash } from "../../utils";
import { SPOTIFY_LOGIN_URL } from "../../constants";
import SpotifyPlayer from "../SpotifyPlayer";
import Button from "components/Button";

const SpotifyLogin = () => {
  const [spotifyApiToken, setSpotifyApiToken] = useState(
    localStorage.getItem("spotifyToken") || hash.access_token
  );

  /**
   * Will flush the token from local storage
   * and update component's token state variable, to purge it
   */
  const setLoggedOut = () => {
    localStorage.removeItem("spotifyToken");
    setSpotifyApiToken("");
  };

  localStorage.setItem("spotifyToken", spotifyApiToken);

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
              setLoggedOut={setLoggedOut}
            />
            <Button onClick={setLoggedOut}>Log out</Button>
          </>
        )}
      </div>
    </div>
  );
};
export default SpotifyLogin;

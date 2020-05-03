export const { API_URL } = process.env;

export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const SPOTIFY_CLIENT_ID = "1a61f6479b1a4e868eaa09550dd964b9";
export const SPOTIFY_REDIRECT_URI = "http://localhost:3000/";
export const scopes = [
  "user-top-read",
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-modify-playback-state",
];

export const SPOTIFY_LOGIN_URL = `${AUTH_ENDPOINT}?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${SPOTIFY_REDIRECT_URI}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

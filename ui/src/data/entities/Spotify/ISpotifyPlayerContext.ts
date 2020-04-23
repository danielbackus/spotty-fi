export interface ISpotifyPlayerContext {
  /*"external_urls" : {
    "spotify" : "https://open.spotify.com/playlist/0gSIG28Ukj96mfP2QKGP8P"
  },*/
  href: string;
  /**
   * Seems to have playlist or other
   */
  type: string;
  uri: string;
}

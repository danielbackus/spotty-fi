import { ISpotifyItemArt } from "./ISpotifyItemArt";
import { ISpotifyPlayerArtist } from "./ISpotifyPlayerArtist";
export interface ISpotifyPlayerAlbumInformation {
  /*"external_urls" : {
    "spotify" : "https://open.spotify.com/album/3Xcl0pytPYqJUSTi2S8jtI"
  },*/
  album_type: string;
  artists: Array<ISpotifyPlayerArtist>;
  available_markets: Array<string>;
  href: string;
  id: string;
  images: Array<ISpotifyItemArt>;
  name: string;
  //this seems to be a simple date YYYY-MM-DD
  release_date: string;
  //this seems to speciy "day" which works in tandem with the date prop above
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

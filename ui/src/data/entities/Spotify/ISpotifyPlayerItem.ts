import { ISpotifyPlayerArtist } from "./ISpotifyPlayerArtist";
import { ISpotifyPlayerAlbumInformation } from "./ISpotifyPlayerAlbumInformation";
export interface ISpotifyPlayerItem {
  name: string;
  album: ISpotifyPlayerAlbumInformation;
  artists: Array<ISpotifyPlayerArtist>;
  available_markets: Array<string>;
  disc_number: number;
  duration_ms: number;
  explicit: boolean; //explicit lyrics
  href: string;
  id: string;
  is_local: boolean;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

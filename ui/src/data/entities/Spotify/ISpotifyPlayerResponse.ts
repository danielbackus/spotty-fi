import { ISpotifyPlayerContext } from "./ISpotifyPlayerContext";
import { ISpotifyPlayerDevice } from "./ISpotifyPlayerDevice";
import { ISpotifyPlayerItem } from "./ISpotifyPlayerItem";

export interface ISpotifyPlayerResponse {
  context?: ISpotifyPlayerContext;
  item?: ISpotifyPlayerItem;
  is_playing?: boolean;
  currently_playing_type?: string;
  device?: ISpotifyPlayerDevice;
  progress_ms?: number;
  repeat_state?: string; // on vs off
  shuffle_state?: boolean;
  timestamp?: Date;
}



import React, { Component } from "react";
import hash from "../../utils/hash";
import { authEndpoint, clientId, redirectUri, scopes } from "../../constants";
import SpotifyPlayer from "../SpotifyPlayer";

class SpotifyLoginDialog extends Component {
    constructor() {
        super();
        this.state = {
            token: null,
            item: {
                album: {
                    images: [{ url: "" }]
                },
                name: "",
                artists: [{ name: "" }],
                duration_ms: 0
            },
            is_playing: "Paused",
            progress_ms: 0,
            playerHeartBeat: null
        };
        this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    }
    componentDidMount() {
        debugger;
        // Set token
        let _token = hash.access_token || localStorage.getItem("spotifyToken");

        if (_token) {
            localStorage.setItem("spotifyToken", _token)
            // Set token
            this.setState({
                token: _token,
                playerHeartBeat: setInterval(() => this.getCurrentlyPlaying(_token), 1000)
            });


        }

    }

    logout() {
        localStorage.removeItem("spotifyToken");
        clearInterval(this.state.playerHeartBeat);
        this.setState({
            token: null
        });

    }
    getCurrentlyPlaying(token) {

        // Make a call using the token
        fetch("https://api.spotify.com/v1/me/player", {
            headers:
            {
                "Authorization": "Bearer " + token
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    item: data.item,
                    is_playing: data.is_playing,
                    progress_ms: data.progress_ms
                });
            })
            .catch(function (error) {
                debugger;
            });

    }

    render() {
        return (
            <div className="App">
                <div className="App-header">

                    {!this.state.token && (
                        <a
                            className="btn btn--loginApp-link"
                            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                                "%20"
                            )}&response_type=token&show_dialog=true`}
                        >
                            Login to Spotify
                        </a>
                    )}
                    {this.state.token && (

                        <SpotifyPlayer
                            item={this.state.item}
                            is_playing={this.state.is_playing}
                            progress_ms={this.progress_ms}
                        />



                    )}
                    {this.state.token && (<button onClick={() => this.logout()}>Log out</button>)}
                </div>
            </div>
        );
    }
}
export default SpotifyLoginDialog;
import React, { useState, useEffect } from 'react';
import switchDevice from "../../Services/device";
import SpotifyPlayer from "./SpotifyPlayer/SpotifyPlayer2";
import {getTokenHandler} from "../../utils/tokenHandling";

const track = {
    name: "",
    album: {
        images: [
            { url: "" }
        ]
    },
    artists: [
        { name: "" }
    ]
}

function WebPlayback() {
    const [is_paused, setPaused] = useState(false);
    const [is_active, setActive] = useState(false);
    const [player, setPlayer] = useState(undefined);
    const [current_track, setTrack] = useState(track);
    var deviceName = 'Huy Music Web'

    //Consider revise this ...
    const [token, setToken] = useState(getTokenHandler('accessToken'))


    const handleSwitchDevice = async () => {
        try {
            await switchDevice(token, deviceName);
            setActive(true); // Update active state after switching device
        } catch (error) {
            console.error('Error switching device:', error);
        }
    };
    //Only use to first render the page
    useEffect(() => {
        console.log("Trigger useEff 1", is_paused, is_active, current_track)
        let script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;
        document.body.appendChild(script);

        window.onSpotifyWebPlaybackSDKReady = async () => {
            const player = new window.Spotify.Player({
                name: deviceName,
                getOAuthToken: cb => { cb(token); },
                volume: 0.7
            });
            setPlayer(player);

            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            player.addListener('player_state_changed', ( state => {

                setTrack(state.track_window.current_track);
                setPaused(state.paused);
            }));

            player.connect().then(success => {
                if (success) {
                    console.log("successfully connected to Spotify player");
                    // Wait for 5 seconds (5000 milliseconds) before switch device
                    setTimeout(() => {
                        switchDevice(token, deviceName).then(() => {
                            console.log('Device switched successfully');
                            setActive(true); // Update active state after switching device
                        }).catch(error => {
                            console.error('Error switching device:', error);
                            throw new Error(error);
                        });
                    }, 5000);
                } else {
                    console.log("unable to connect to Spotify Player");
                    // Reload window
                    window.location.reload();
                }
            });

            //Change Token
            const intervalId = setInterval(async () => {
                await setToken(getTokenHandler('accessToken'));
            }, 900000); // Refresh token every 15 minutes (900000 milliseconds)

            return () => clearInterval(intervalId);
        };

    }, []);


    // Effect to update player's token when it changes
    useEffect(() => {
        if (player) {
            player._options.getOAuthToken = cb => { cb(token); };
        }
    }, [token, player]);


    if (!is_active) {
        return (
            <>
                <div className="container">
                    <div className="main-wrapper">
                        <b> ...Waiting to transfer device... </b>
                        <button
                            onClick={handleSwitchDevice}
                        >Manual Switch device</button>
                    </div>
                </div>
            </>)
    } else {
        return (
            <SpotifyPlayer player={player} current_track={current_track} is_paused={is_paused} setPaused={setPaused} />
        );
    }
}

export default WebPlayback